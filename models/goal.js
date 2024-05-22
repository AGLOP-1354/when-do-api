const mongoose  = require('mongoose');

const goalSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    title: { type: String, required: true },
    color: { type: String, required: true },
    isCompleted: { type: Boolean, required: false },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: false },
    deletedAt: { type: Date, required: false },
  },
  {
    timestamps: true
  },
);

module.exports = mongoose.model('goals', goalSchema);
