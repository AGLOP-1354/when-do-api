const Goal = require('../../models/goal');
const Routine = require('../../models/routine');
const RoutineSuccess = require('../../models/routineSuccess');
const TodayTodo = require('../../models/todayTodo');

const controllers = {};

controllers.addGoal = async (req, res) => {
  const {
    title,
    color,
    isCompleted,
    startDate,
    userId,
  } = req.body;

  const goal = await Goal.create({
    title,
    color,
    isCompleted,
    startDate: startDate || new Date(),
    endDate: null,
    deletedAt: null,
    userId,
  });

  res.send({
    status: 200,
    data: goal,
  });
}

controllers.updateGoal = async (req, res) => {
  const {
    id,
    title,
    color,
    isCompleted,
    startDate,
    endDate,
  } = req.body;

  const goal = await Goal.findById({
    _id: id,
  });

  if (title) goal.title = title;
  if (color) goal.color = color;
  if (isCompleted) {
    goal.isCompleted = isCompleted;

    const routines = await Routine.find({
      goalId: id,
    });
    const todayTodos = await TodayTodo.find({
      goalId: id,
    });

    if (routines && routines.length) {
      routines.map(async (routine) => {
        const routineSuccess = await RoutineSuccess.findOne({
          routineId: routine._id,
        });

        if (routineSuccess) {
          routineSuccess.isSuccess = true;
          await routineSuccess.save();
        } else {
          await RoutineSuccess.create({
            routineId: routine._id,
            isSuccess: true,
          });
        }

        routine.endDate = new Date();
        await routine.save();
      });
    }

    if (todayTodos && todayTodos.length) {
      todayTodos.map(async (todayTodo) => {
        todayTodo.isCompleted = true;
        await todayTodo.save();
      });
    }
  }
  if (startDate) goal.startDate = startDate;
  if (endDate) goal.endDate = endDate;

  await goal.save();
  res.send({
    status: 200,
    data: goal,
  });
}

controllers.getGoalList = async (req, res) => {
  const { userId } = req.params;

  const result = await Goal.find({
    userId,
    endDate: {
      $eq: null,
    },
  });

  res.send({
    status: 200,
    data: result,
  });
}

module.exports = controllers;
