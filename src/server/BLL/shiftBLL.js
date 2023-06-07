const shiftDAL = require('../DAL/shiftDAL');

// CRUD Functions
exports.getAllShifts = async () => {
  return await shiftDAL.getAllShifts();
};

exports.getShiftById = async (id) => {
  return await shiftDAL.getShiftById(id);
};

exports.createShift = async (shift) => {
  await shiftDAL.createShift(shift);
  return 'Shift created successfully!'
};

exports.updateShift = async (id, shift) => {
  await shiftDAL.updateShift(id, shift);
  return 'Shift updated successfully!'
};

exports.deleteShift = async (id) => {
  await shiftDAL.deleteShift(id);
  return 'Shift deleted successfully!'
};

// Other Functions -
exports.getShiftsbyEmployeeId = async (employeeId) => {
  return await shiftDAL.getShiftsByEmployeeId(employeeId);
};

exports.allocateEmployeesToShift = async (shiftId, employeeIds) => {
  await shiftDAL.allocateEmployeesToShift(shiftId, employeeIds);
  return 'Employees allocated to shift successfully!'
};