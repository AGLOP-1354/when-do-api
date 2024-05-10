const express = require('express');
const controllers = require('./controller');

const router = express.Router();

router.post('/add', controllers.addTodayTodo)

module.exports = router;
