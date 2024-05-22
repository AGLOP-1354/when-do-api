const Routine = require('../../models/routine');

const controllers = {};

controllers.addRoutine = async (req, res) => {
  const {
    userId,
    title,
    startDate,
    updatedAt,
    isAlarm,
    alarmTime,
    goalId,
    repeatDayOfWeek,
  } = req.body;

  const routine = await Routine.create({
    title,
    startDate: startDate || new Date(),
    updatedAt: updatedAt || new Date(),
    deletedAt: null,
    endDate: null,
    userId,
    isAlarm: isAlarm || false,
    alarmTime: alarmTime || null,
    goalId: goalId || null,
    repeatDayOfWeek,
  });

  res.send({
    status: 200,
    data: routine,
  });
}

controllers.getRoutineList = async (req, res) => {
  const { userId } = req.params;

  const result = await Routine.find({
    userId,
    deletedAt: {
      $eq: null,
    },
    endDate: {
      $eq: null,
    },
  });

  res.send({
    status: 200,
    data: result,
  });
}

controllers.getRoutine = async (req, res) => {
  const {
    userId,
    routineId,
    selectedDate,
  } = req.params;

  const routine = Routine.findOne({
    userId,
    startDate: {
      $gte: selectedDate,
    }
  });
}

module.exports = controllers;
