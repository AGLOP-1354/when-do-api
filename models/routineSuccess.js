const mongoose  = require('mongoose');

const routineSuccessSchema = new mongoose.Schema({
    routineId: { type: String, required: true },
    isSuccess: { type: Boolean, required: false },
    createdAt: { type: Date, required: true, default: new Date },
    updatedAt: { type: Date, required: false, default: new Date },
    deletedAt: { type: Date, required: false },
  },
  {
    timestamps: true
  },
);

module.exports = mongoose.model('routineSuccess', routineSuccessSchema);
