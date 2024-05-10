const express = require('express');
const todayTodo = require('./todayTodo');
const goal = require('./goal');

const router = express.Router();

router.use('/today-todo', todayTodo);
router.use('/goal', goal);

module.exports = router;
