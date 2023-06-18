require('dotenv').config() // Equivale a const dotenv = require('dotenv') 
                            // y dotenv.config() 
const express = require('express')
const connectDb = require('./db/mongodb')
const { appConfig, dbConfig }  = require('./config').default


const app = express()

async function initApp (appConfig, dbConfig) {
    try {
        await connectDb(dbConfig)
        app.listen(appConfig.port, () => console.log(`Escuchando en el puerto ${appConfig.port}`))
    } catch (e) {
        console.error(e)
        process.exit(0)
    }
}

initApp(appConfig, dbConfig)