const mongoose  = require('mongoose');

// Define Schemes
const todayTodoSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    title: { type: String, required: true },
    isAlarm: { type: Boolean, required: false },
    alarmTime: { type: Date, required: false },
    isCompleted: { type: Boolean, required: false },
    startDate: { type: Date, required: true },
    goalId: { type: String, required: false },
  },
  {
    timestamps: true
  },
);

// Create Model & Export
module.exports = mongoose.model('todayTodos', todayTodoSchema);
