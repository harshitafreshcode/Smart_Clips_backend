

import { Request, Response } from "express";
import mongoose from "mongoose";
import { ErrorResponse, successResponse } from "../../helpers/apiResponse";
import { logger } from "../../lib/logger";
import { CheckEmailExist, LoginUser, addUser } from "../../domain/models/user.model";
const ObjectId = mongoose.Types.ObjectId;

export const signIn = (req: Request, res: Response): any => {
    try {
        const { token } = req.body

        addUser(token, (err: any, data: any) => {
            console.log("Error", err);
            console.log("success", data);
            if (err) {
                return ErrorResponse(res, err);
            } else {
                return successResponse(res, "Login Successfully", data);

            }
        });

    } catch (e) {
        logger.error(e);
        ErrorResponse(res, e);
    }
};

export const Login = (req: Request, res: Response): any => {
    try {

        let where: object = { email: req.body.email, token: req.body.token };
        LoginUser(where, req.body.password, async (err: any, data: any) => {
            if (err) {
                return ErrorResponse(res, err);
            } else {
                return successResponse(res, "Login Successfully", []);
            }
        });

    } catch (e) {
        logger.error(e);
        ErrorResponse(res, e);
    }
};
