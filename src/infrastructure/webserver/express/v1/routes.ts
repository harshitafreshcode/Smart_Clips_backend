import express, { Request, Response } from 'express'
import { Route } from '../../../../api/interface/routes/index';

export const createRouter = (): express.Router => {
    const router = express.Router();
    Route(router);
    return router;
}