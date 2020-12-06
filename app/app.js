'use strict'

const app = require('./server');
const mongo = require('../mongo/connect');

app.route('/setDates').post(async (req, res) => {
    let db = mongo.getDb();
    await db.collection('dates').insertOne({ 
        name: req.body.name,
        details: req.body.details,
        date: req.body.date,
        timeFrom: req.body.timeFrom,
        timeTo: req.body.timeTo
    });
});

app.route('/getDates').post(async (req, res) => {
    let db = mongo.getDb();
    let dates = await db.collection('dates').find({ date: req.body.date }).toArray();
    if (dates[0] !== undefined) {
        res.status(200).json(dates);
    }
    else {
        res.send('Dates not found!')
    }
});

app.route('/register').post(async (req, res) => {
    let db = mongo.getDb();
    let user = await db.collection('users').findOne({ email: req.body.email });
    // Если пользователь с таким email уже существует
    if (user !== null) {
        res.send('User already exists!');
    }
    // Если пользователя с таким email нет
    else {
        await db.collection('users').insertOne(req.body);
        res.send('OK');
    };
});

app.route('/login').post(async (req, res) => {
    let db = mongo.getDb();
    console.log(req.body)
    let user = await db.collection('users').findOne({ email: req.body.email });
    let activeUser = await db.collection('users').findOne({ status: 'active' });
    if (user !== null) {
        if (req.body.pass !== user.pass) {
            res.send('Email or password is incorrect!')
        }
        else if (req.body.pass === user.pass) {
            if (activeUser !== null) {
                await db.collection('users').updateOne({ status: 'active' }, {$set: {status: 'inactive'}});
                await db.collection('users').updateOne({ email: req.body.email }, {$set: {status: 'active'}});
                res.send('OK')
            }
            else {
                await db.collection('users').updateOne({ email: req.body.email }, {$set: {status: 'active'}});
                res.send('OK')
            }
        }
    }
    else {
        res.send('User not found!')
    }
});

app.route('/getMe').get(async (req, res) => {
    let db = mongo.getDb();
    let activeUser = await db.collection('users').findOne({ status: 'active' });
    if (activeUser !== null) {
        res.send(activeUser)
    }
    else {
        res.send('User not found!')
    };
});