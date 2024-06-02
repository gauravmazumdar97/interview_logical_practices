require("dotenv").config();

const env = process.env.NODE_ENV ? process.env.NODE_ENV : "local"; // 'dev' or 'prod'



const local = {
    DB_CONFIG: {
        USER: "LOCAL",
        PASSWORD: process.env.LOCAL_DB_PASSWORD,
        HOST: process.env.LOCAL_DB_HOST,
        DATABASE: process.env.LOCAL_DATABASE,
        CONNECTION_LIMIT: process.env.LOCAL_DB_CONNECTION_LIMIT,
        PORT: process.env.LOCAL_DB_PORT
    },
    AWS_CONFIG: {
        AWS_ACCESS_KEY:process.env.AWS_ACCESS_KEY,
        AWS_SECRET_KEY:process.env.AWS_SECRET_KEY,
        AWS_BUCKET_REIGN:process.env.AWS_BUCKET_REIGN,
        USE_ACCELERATE_ENDPOINT:process.env.USE_ACCELERATE_ENDPOINT
    },


};


const dev = {
    DB_CONFIG: {
        USER: "DEV",
        PASSWORD: process.env.LOCAL_DB_PASSWORD,
        HOST: process.env.LOCAL_DB_HOST,
        DATABASE: process.env.LOCAL_DATABASE,
        CONNECTION_LIMIT: process.env.LOCAL_DB_CONNECTION_LIMIT,
        PORT: process.env.LOCAL_DB_PORT
    },
    AWS_CONFIG: {
        AWS_ACCESS_KEY:process.env.AWS_ACCESS_KEY,
        AWS_SECRET_KEY:process.env.AWS_SECRET_KEY,
        AWS_BUCKET_REIGN:process.env.AWS_BUCKET_REIGN,
        USE_ACCELERATE_ENDPOINT:process.env.USE_ACCELERATE_ENDPOINT
    },

};


const staging = {
    DB_CONFIG: {
        USER: "staging",
        PASSWORD: process.env.LOCAL_DB_PASSWORD,
        HOST: process.env.LOCAL_DB_HOST,
        DATABASE: process.env.LOCAL_DATABASE,
        CONNECTION_LIMIT: process.env.LOCAL_DB_CONNECTION_LIMIT,
        PORT: process.env.LOCAL_DB_PORT
    },
    AWS_CONFIG: {
        AWS_ACCESS_KEY:process.env.AWS_ACCESS_KEY,
        AWS_SECRET_KEY:process.env.AWS_SECRET_KEY,
        AWS_BUCKET_REIGN:process.env.AWS_BUCKET_REIGN,
        USE_ACCELERATE_ENDPOINT:process.env.USE_ACCELERATE_ENDPOINT
    },

};


const config = { local, dev, staging };
module.exports = config[env];