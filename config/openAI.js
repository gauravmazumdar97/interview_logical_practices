const express = require('express');
const OpenAI = require('openai');
const app = express();
const config = require('./config');


app.use(express.urlencoded({ extended: true, limit: "500mb" }))
app.use(express.json({ extended: true, limit: "500mb" }))


const OPENAI = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
})

module.exports = OPENAI;