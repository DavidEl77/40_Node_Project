const Shift = require('../models/shift');

// CRUD Functions
exports.getAllShifts = async () => {
  return await Shift.find()
};

exports.getShiftById = async (id) => {
  return await Shift.findById(id)
};

exports.createShift = async (shift) => {
  const newShift = new Shift(shift);
  return await newShift.save();
};

exports.updateShift = async (id, shift) => {
  return await Shift.findByIdAndUpdate(id, shift, { new: true })
};

exports.deleteShift = async (id) => {
  return await Shift.findByIdAndDelete(id);
};

// Other Functions
exports.getShiftsByEmployeeId = async (employeeId) => {
  return await Shift.find({ employees: employeeId});
};

// Removes the employee from all their shifts
exports.removeEmployeeFromShifts = async (employeeId) => {
  return await Shift.updateMany({}, { $pull: { employees: employeeId } })
};

exports.allocateEmployeesToShift = async (shiftId, employeeIds) => {
  await Shift.updateOne({ _id: shiftId }, { $addToSet: { employees: { $each: employeeIds}}})
};