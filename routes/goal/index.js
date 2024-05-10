const express = require('express');
const controllers = require('./controllers');

const router = express.Router();

router.post('/add', controllers.addGoal)

module.exports = router;
