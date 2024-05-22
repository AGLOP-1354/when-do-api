const mongoose  = require('mongoose');

const accountSchema = new mongoose.Schema({
    userId: { type: String, required: true, unique: true },
    socialId: { type: String, required: false, unique: true},
    name: { type: String, required: true },
    email: { type: String, required: true },
    description: { type: String, required: false },
    profileImage: { type: String, required: false },
    createdAt: { type: Date, required: true },
    updatedAt: { type: Date, required: false },
    deletedAt: { type: Date, required: false },
  },
  {
    timestamps: true
  },
);

module.exports = mongoose.model('accounts', accountSchema);
