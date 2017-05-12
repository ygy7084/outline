'use strict';

import express from 'express';
import path from 'path';

const app = express();
const port = 3000;

app.get('/', (req, res)=> {
    res.sendFile(path.resolve(__dirname, './../public/index.html'));
});
app.use('/', express.static(path.join(__dirname, './../public')));

app.use((req, res) => {
    res.status(404).send('NOT FOUND');
});

app.listen(port, () => {
    console.log("port : "+port);
});