'use strict';

import express from 'express';
import path from 'path';
import React from 'react';

const app = express();
const port = 3000;
//server setting

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