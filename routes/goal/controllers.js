const Goal = require('../../models/goal');

const controllers = {};

controllers.addGoal = async (req, res) => {
  const {
    title,
    color,
    isCompleted,
    startDate,
    endDate,
    userId,
  } = req.body;

  const goal = await Goal.create({
    title,
    color,
    isCompleted,
    startDate,
    endDate,
    userId,
  });

  res.send({
    status: 200,
    data: goal,
  });
}

module.exports = controllers;
