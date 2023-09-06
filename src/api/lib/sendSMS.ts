import twilio, { Twilio } from 'twilio';
import { logger } from './logger';
const accountSid = 'AC3f3771df29a2ff0272a5d3dfe57c3e15';
const authToken = 'f0b1fdec523b99e7c1090a298adca0a2';
const client: Twilio = twilio(accountSid, authToken);

export const sendOtpBySMS = async (from: string, to: string, body: string,callback:any) => {
    try {

        await client.messages
            .create({
                body,
                from,
                to
            })
            .then(message => {
                return callback('','Please Check SMS for Reset Password Link')
            }).catch((e: any) => {
                console.log(e)
                logger.log(e)
                return callback('',e)

            })

    } catch (error) {
        console.error('Error sending SMS:', error);
    }
};

