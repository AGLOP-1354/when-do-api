const TodayTodo = require('../../models/todayTodo');

const controllers = {};

controllers.addTodayTodo = async (req, res) => {
  const {
    title,
    isAlarm,
    alarmTime,
    isCompleted,
    startDate,
    goalId,
    userId,
  } = req.body;

  const todayTodo = await TodayTodo.create({
    title,
    isAlarm,
    alarmTime,
    isCompleted,
    startDate,
    goalId,
    userId,
  });

  res.send({
    status: 200,
    data: todayTodo,
  });
}

module.exports = controllers;
