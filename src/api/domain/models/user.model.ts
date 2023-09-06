import { sign } from "../../lib/jwt";
import { logger } from "../../lib/logger";
import bcrypt from "bcrypt";
import User from "../schemas/user";
const { OAuth2Client } = require('google-auth-library')
import { env } from '../../../infrastructure/env/index'
const client = new OAuth2Client(process.env.CLIENT_ID)


export async function CheckEmailExist(
  where: object,
  userId: any,
  callback: any
) {
  // console.log("where: ", where);
  const user = await User.findOne(where);
  //console.log("Single  user: ", user);

  if (!user) {
    callback("", user);
  } else {
    var userD = JSON.parse(JSON.stringify(user));
    console.log(userId == userD._id, "==", userD._id);
    if (userId == userD._id) {
      callback("", user);
    } else {
      callback("Email is Already Exist!", "");
    }
  }
}

export async function CheckMobileExist(
  where: object,
  userId: any,
  callback: any
) {
  // console.log("where: ", where);
  const user = await User.findOne(where);
  // console.log("Single  user: ", user);

  if (!user) callback("", user);
  else {
    console.log('3');

    var userD = JSON.parse(JSON.stringify(user));
    if (userId == userD._id) {
      callback("", user);
    } else {
      callback("Mobile Number Already Exist!", "");
    }
  }
}

async function verifyGoogleToken(token: string) {
  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: env.CLIENT_ID,
    });
    return { payload: ticket.getPayload() };
  } catch (error) {
    return { error: "Invalid user detected. Please try again" };
  }
}

export async function addUser(token: string, callback: any) {
  try {
    console.log('token', token);

    const verificationResponse = await verifyGoogleToken(token);

    if (verificationResponse.error) {
      return callback(verificationResponse.error, "");
    }

    const userData = verificationResponse?.payload;

    console.log(userData, 'userData');
    const userObj = {
      firstName: userData?.given_name,
      lastName: userData?.family_name,
      email: userData?.email,
      authToken: userData?.sub
    }
    const user = await User.create(userObj);

    if (user) {
      callback("", user);
    } else {
      callback("error", user);
    }
  } catch (error: any) {
    logger.error(error);
    callback(error)
  }
}

export async function LoginUser(where: any, password: string, callback: any) {
  try {

    const { email, token } = where;

    if (token) {
      const verificationResponse = await verifyGoogleToken(token);
      if (verificationResponse.error) {
        return callback(verificationResponse.error, '')
      }


      const userData = verificationResponse?.payload;

      const user = await User.findOne({ email: userData.email });

      if (user) {
        const res = JSON.parse(JSON.stringify(user));

        var userdata = {
          email: res?.email,
          phone: res?.phone,
          user_id: res._id,
        };

        const token = sign(userdata);
        res.token = token;

        await User.updateOne({ _id: res._id }, res, { new: true });

        callback("", res);

      } else {
        callback("Invalid Email or Password!", "");
      }
    }

  } catch (error: any) {
    callback(error.message);
    // return ErrorResponse(response,error.message)
  }
}


