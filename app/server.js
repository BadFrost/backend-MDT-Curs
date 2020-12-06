'use strict'

const express = require('express');
const cors = require('cors');
const mongo = require('../mongo/connect');
let app = express();

app.use(cors())
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

mongo.connectToServer(async (err) => {
    if (err) console.log(err)
    console.log('Connected to DB!');
    let db = mongo.getDb();
    await db.createCollection('dates');
    await db.createCollection('users');
});

app.listen(4040, () => {
    console.log('App listening on port 4040!');
});

module.exports = app