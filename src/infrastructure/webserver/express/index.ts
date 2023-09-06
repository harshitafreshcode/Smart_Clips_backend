import { env } from '../../env'
import express from 'express'
import bodyParser from 'body-parser'
import { createRouter } from './v1/routes'
import { logger, loggerFile } from '../../../api/lib/logger'
import connects from '../../../api/config/db'
const cookieParser = require('cookie-parser');

// Create server module 
export const createServer = (): void => {

    // Initialize
    const app = express();
    const port = env.APPPORT;
    const host = env.HOST;
    app.use(cookieParser());


    // Middlewares
    /* To handle invalid JSON data request */
    app.use(bodyParser.json({ limit: '50mb' }));

    /* For parsing urlencoded data */
    app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))

    // App Header
    app.use((req, res, next) => {
        if (env.NODE_ENV == "development") {
            /** set logger every http request */
            loggerFile.info(req.originalUrl);
            loggerFile.info(req.body)
        }

        // CORS Headers
        let responseSettings = {
            "AccessControlAllowOrigin": '*',
            "AccessControlAllowHeaders": "Content-Type,X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5,  Date, X-Api-Version, X-File-Name",
            "AccessControlAllowMethods": "POST, GET, PUT, DELETE, OPTIONS",
            "AccessControlAllowCredentials": 'true'
        }

        // Set Custom headers for CORS
        res.header("Access-Control-Allow-Credentials", responseSettings.AccessControlAllowCredentials);
        res.header("Access-Control-Allow-Origin", responseSettings.AccessControlAllowOrigin);
        res.header("Access-Control-Allow-Headers", (req.headers['access-control-request-headers']) ? req.headers['access-control-request-headers'] : "x-requested-with");
        res.header("Access-Control-Allow-Methods", (req.headers['access-control-request-method']) ? req.headers['access-control-request-method'] : responseSettings.AccessControlAllowMethods);
        if ('OPTIONS' == req.method) {
            res.send(200).end();
        }
        else {
            next();
        }
    })

    // Routes
    app.use(createRouter());
    // Database Connection
    // AppDataSource();

    connects().then((result) => {
        app.listen(port, () => {
            logger.info(`Server listen on port http://${host}:${port}`)
        })
    }).catch((err) => {
        console.log('Database Connection Failed : ', err)
    });
}   
