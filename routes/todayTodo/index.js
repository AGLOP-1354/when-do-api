const express = require('express');
const controllers = require('./controller');

const router = express.Router();

router.post('/add', controllers.addTodayTodo);

router.post('/update', controllers.updateTodayTodo);

router.post('/delete', controllers.deleteTodayTodo);

router.get('/:userId/:selectedDate', controllers.getTodayTodoList);

module.exports = router;
