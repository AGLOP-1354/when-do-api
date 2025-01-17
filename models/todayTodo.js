const mongoose  = require('mongoose');

const todayTodoSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    title: { type: String, required: true },
    isAlarm: { type: Boolean, required: false },
    alarmTime: { type: Date, required: false },
    isCompleted: { type: Boolean, required: false },
    startDate: { type: Date, required: true },
    goalId: { type: String, required: false },
    createdAt: { type: Date, required: false },
    updatedAt: { type: Date, required: false },
    deletedAt: { type: Date, required: false },
  },
  {
    timestamps: true
  },
);

module.exports = mongoose.model('todayTodos', todayTodoSchema);
