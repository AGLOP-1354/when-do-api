const dayjs = require('dayjs');
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
    title: title || '',
    isAlarm: isAlarm || false,
    alarmTime: alarmTime || '',
    isCompleted: isCompleted || false,
    startDate: startDate || new Date(),
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
    goalId: goalId || '',
    userId: userId || '',
  });

  res.send({
    status: 200,
    data: todayTodo,
  });
}

controllers.updateTodayTodo = async (req, res) => {
  const {
    id,
    title,
    isAlarm,
    alarmTime,
    isCompleted,
    startDate,
    goalId,
  } = req.body;

  const todayTodo = await TodayTodo.findById({
    _id: id,
  });

  if (title) todayTodo.title = title;
  if (isAlarm) todayTodo.isAlarm = isAlarm;
  if (alarmTime) todayTodo.alarmTime = alarmTime;
  if (isCompleted) todayTodo.isCompleted = isCompleted;
  if (startDate) todayTodo.startDate = startDate;
  if (goalId) todayTodo.goalId = goalId;

  todayTodo.updatedAt = new Date();
  await todayTodo.save();
  res.send({
    status: 200,
    data: todayTodo,
  });
}

controllers.getTodayTodoList = async (req, res) => {
  const { userId, selectedDate } = req.params;
  const formattedSelectedDate = dayjs(selectedDate).format('YYYY-MM-DD');

  const result = await TodayTodo.find({
    userId,
    startDate: {
      $gte: new Date(formattedSelectedDate),
      $lt: new Date(new Date(formattedSelectedDate).setDate(new Date(formattedSelectedDate).getDate() + 1)),
    },
    deletedAt: {
      $eq: null,
    },
  });

  res.send({
    status: 200,
    data: result,
  });
}

controllers.deleteTodayTodo = async (req, res) => {
  const { id } = req.body;

  const todayTodo = await TodayTodo.findById({
    _id: id,
  });

  todayTodo.deletedAt = new Date();

  await todayTodo.save();
  res.send({
    status: 200,
    data: todayTodo,
  });
}

module.exports = controllers;
