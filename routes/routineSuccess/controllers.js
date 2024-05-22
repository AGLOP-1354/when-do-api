const RoutineSuccess = require('../../models/routineSuccess');

const controllers = {};

controllers.addRoutineSuccess = async (req, res) => {
  const {
    routineId,
    isSuccess,
  } = req.body;

  const routineSuccess = await RoutineSuccess.create({
    routineId,
    isSuccess: isSuccess || false,
  });

  res.send({
    status: 200,
    data: routineSuccess,
  });
}

controllers.getRoutineSuccess = async (req, res) => {
  const { routineId } = req.params;

  const result = await RoutineSuccess.findOne({
    routineId
  });

  res.send({
    status: 200,
    data: result,
  });
}

controllers.updateRoutineSuccess = async (req, res) => {
  const {
    routineId,
    isSuccess,
  } = req.body;

  const routineSuccess = await RoutineSuccess.findOne({
    routineId
  });

  routineSuccess.isSuccess = isSuccess;

  await routineSuccess.save();
  res.send({ status: 200, data: routineSuccess});
}

module.exports = controllers;
