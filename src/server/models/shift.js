const mongoose = require('mongoose');

const shiftSchema = new mongoose.Schema({
  date: Date,
  start: Number,
  end: Number,
  employees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Employee' }],
});

module.exports = mongoose.model('Shift', shiftSchema);
