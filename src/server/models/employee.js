const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  startWorkYear: Number,
  departmentID: { type: mongoose.Schema.Types.ObjectId, ref: 'Department' },
  shifts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Shift' }]
});

module.exports = mongoose.model('Employee', employeeSchema);

// "firstName": "David",
// "lastName": "Elon",
// "startWorkYear": 2020,
// "department": { type: mongoose.Schema.Types.ObjectId, ref: 'Department' },
// "shifts": [{ type: mongoose.Schema.Types.ObjectId, ref: 'Shift' }]
// ["647791f917964a63994bc50d", "6477925417964a63994bc50e", "6477926517964a63994bc50f"]