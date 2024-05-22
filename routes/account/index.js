const express = require('express');
const controllers = require('./controllers');

const router = express.Router();

router.get('/get/:userId', controllers.getAccount);

router.post('/create', controllers.createAccount);

router.post('/update', controllers.updateAccount);

router.post('/delete', controllers.deleteAccount);

module.exports = router;
