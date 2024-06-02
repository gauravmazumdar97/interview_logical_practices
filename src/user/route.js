const express = require('express');
const app = express();
const router = express.Router();
const OPENAI = require("../../config/openAI")
const middleware = require("../../middleware/middleware")
const controller = require('./controller');
const messages = require('../../locales/messages');
const path = require('path');
const config = require('../../config/config')
const { Helpers } = require('../../config/helperFunction')
app.use(express.static(path.join(__dirname, 'public')));
const multer = require('multer');
const AWS = require('aws-sdk');
const bodyParser = require('body-parser');
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
const upload = multer()


const bucketName = process.env.AWS_BUCKET_NAME;
const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
    region: process.env.AWS_BUCKET_REIGN,
    useAccelerateEndpoint: process.env.USE_ACCELERATE_ENDPOINT
});



router.get('/fibonaaci', async (req, res) => {

    try {
        const num = req.body.facNumber;
        const words = await Helpers.fibonaaci(num);

        if (num == '') {
            return res.status(200).json({ fibonaaci: words, msg: 'Blank Field, enter a word to check the fibonaaci value' });
        }
        if (num) {
            return res.status(200).json({ fibonaaci: words, msg: `fibonaaci value of the entered number` });
        }
        else {
            return res.status(500).json({ FACTORIAL: words, msg: `Factorial value of the entered number` });
        }




    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Something Went Wrong ", error: error });
    }



})



router.get('/factorial', async (req, res) => {

    try {
        const num = req.body.facNumber;
        const words = await Helpers.factorial(num);
        console.log(words);

        if (num == '') {
            return res.status(200).json({ FACTORIAL: words, msg: 'Blank Field, enter a word to check the factorial value' });
        }
        if (num) {
            const arr = [0]
            for (let index = num; index > 0; index--) {
                arr.push(index)
            }

            return res.status(200).json({ FACTORIAL: arr.join('+'), msg: `Factorial value of the entered number` });
        }
        else {
            return res.status(500).json({ FACTORIAL: words, msg: `Factorial value of the entered number` });
        }




    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Something Went Wrong ", error: error });
    }



})




router.get('/palindrome', async (req, res) => {

    try {
        const name = req.body.Name;
        const words = await Helpers.palindrome(name);

        if (name == '') {
            return res.status(200).json({ msg: 'Blank Field, enter a word to check if it is a palindrome', Name: name, ReversedWord: words.reversedWord });
        }
        if (words.reversedCheckWord == words.name) {
            return res.status(200).json({ PALINDROME: words.reversedCheckWord == words.name, msg: 'Yes, word is a palindrome', Name: name, ReversedWord: words.reversedWord });
        }
        else {
            return res.status(500).json({ PALINDROME: words.reversedCheckWord == words.name, msg: 'No, word is not a palindrome', Name: name, ReversedWord: words.reversedWord });
        }




    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Something Went Wrong", error: error });
    }



})




router.get('/OPENAI', async (req, res) => {

    try {
        const response = await OPENAI.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{ "role": "assistant", "content": "WHAT IS" }],
            maxToken: 100,
        });

        res.status(200).json({ message: "API WORKING", RESPONSE: response, })

    } catch (error) {
        res.status(500).json({ message: "API NOT WORKING", RESPONSE: error, })
    }


})





module.exports = router;