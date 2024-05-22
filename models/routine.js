const mongoose  = require('mongoose');

const routineSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    title: { type: String, required: true },
    isAlarm: { type: Boolean, required: false },
    alarmTime: { type: Date, required: false },
    goalId: { type: String, required: false },
    repeatDayOfWeek: { type: Array, required: true },
    startDate: { type: Date, required: true },
    updatedAt: { type: Date, required: false },
    deletedAt: { type: Date, required: false },
    endDate: { type: Date, required: false },
  },
  {
    timestamps: true
  },
);

module.exports = mongoose.model('routines', routineSchema);
