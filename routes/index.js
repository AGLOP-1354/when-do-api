const express = require('express');
const todayTodo = require('./todayTodo');

const router = express.Router();

router.use('/today-todo', todayTodo);

module.exports = router;
