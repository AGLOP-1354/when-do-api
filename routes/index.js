const express = require('express');
const todayTodo = require('./todayTodo');
const goal = require('./goal');
const account = require('./account');
const routine = require('./routine');
const routineSuccess = require('./routineSuccess');

const router = express.Router();

router.use('/today-todo', todayTodo);
router.use('/goal', goal);
router.use('/account', account);
router.use('/routine', routine);
router.use('/routine-success', routineSuccess);

module.exports = router;
