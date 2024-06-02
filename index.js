require("dotenv").config();
const express = require("express");
const app = express();
const userRoute = require("./src/user/route")
const path = require('path');
const port = process.env.PORT || 7000;
const multer = require('multer');
const fs = require('fs');
const config = require('./config/config')
app.use(express.urlencoded({ extended: true, limit: "500mb" }))
app.use(express.json({ extended: true, limit: "500mb" }))



app.use('/user/api/v1', userRoute)


// Multer configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

// Route for file upload
app.post('/upload', upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }

    const filePath = `uploads/${req.file.filename}`;

    // Read the uploaded file using createReadStream
    const readStream = fs.createReadStream(filePath,'utf-8');

    readStream.on('data', (chunk) => {
        console.log('Received chunk:', chunk);
    });

    // Example: Respond to the client after file read is complete
    readStream.on('end',(chunk)=>{
        res.send({ msg: 'Process completed **' });
    })

    // Example: Handle errors
    readStream.on('error', (err) => {
        console.error('Error reading file:', err);  
        res.status(500).send('Error reading file.');
    });
});









app.post('/stream', (req, res) => {
    
    const data = req.file;
    const readStream= fs.createReadStream('uploads/readFile.txt');
    const writeStream= fs.createWriteStream('uploads/writeFile.txt');
    
    readStream.on('data',(chunk)=>{
        writeStream.write(chunk);
    })
    
    readStream.on('end',(chunk)=>{
        res.send({ msg: 'Process completed **' });
    })
    
    
})






app.listen(port, () => {
    console.log('Server started at PORT: ', port);
})

