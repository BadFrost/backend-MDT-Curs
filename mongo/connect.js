'use strict'

const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/';

let _db;

module.exports = {
    connectToServer: async (callback) => {
        MongoClient.connect(url,  { useNewUrlParser: true, useUnifiedTopology: true }, async (err, client) => {
            _db = client.db('MDTCurs');
            return callback(err);
        });
    },
    getDb: () => {
        return _db;
    }
};