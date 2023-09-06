import express from "express";
import { logger } from '../../lib/logger'
import { signIn } from "../controllers/userController";

export const Route = (router: express.Router): void => {
    try {
        router.post('/signIn', signIn);
    } catch (error) {
        logger.error(error);
    }
};

// CLIENT_ID="332726688701-gm91fah4le704vt5h23rrk887887m0it.apps.googleusercontent.com"
// d6a60d36fcb6657a304c290b15050f71d3b0923a