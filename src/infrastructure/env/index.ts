import dotenv from 'dotenv'

dotenv.config()

// export env constant

export const env = {
    DB_HOST: process.env.DB_HOST,
    DB_USER: process.env.DB_USER,
    DB_PASS: process.env.DB_PASS,
    DB_NAME: process.env.DB_NAME,
    APPPORT: process.env.PORT,

    HOST: process.env.HOST,
    NODE_ENV: process.env.NODE_ENV,
    SITE_TITLE: process.env.SITE_TITLE,
    JWT_SECRET: process.env.JWT_SECRET,
    TOKEN_SECRET: process.env.TOKEN_SECRET,
    TOKEN_HEADER_KEY: process.env.TOKEN_HEADER_KEY,
    JWT_TIMEOUT_DURATION: process.env.JWT_TIMEOUT_DURATION,

    CLIENT_ID:process.env.CLIENT_ID
}
