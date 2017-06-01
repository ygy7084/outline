'use strict';

import express from 'express';
import path from 'path';
import React from 'react';
import multer from 'multer';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 3000;
//server setting

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/test')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
});
let upload = multer({storage : storage});

app.post('/image', upload.single('file'), (req,res) => {
    console.log('hi');
});
app.use(express.static(path.join(__dirname,'./../public')));
//static file url


app.get('*', (req, res)=> {
    res.sendFile(path.resolve(__dirname, './../public/index.html'));
});
//entry point

app.use((req, res) => {
    res.status(404).send('NOT FOUND');
});
//page not found

app.listen(port, () => {
    console.log("port : "+port);
});
//run server