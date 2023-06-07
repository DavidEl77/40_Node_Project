const Department = require('../models/department');
const Shift = require('../models/shift');

// CRUD Functions
exports.getAllDepartments = async () => {
  return await Department.find().populate('manager');
};

exports.getDepartmentById = async (id) => {
  return await Department.findById(id).populate('manager');
};

exports.createDepartment = async (department) => {
  const newDepartment = new Department(department);
  return await newDepartment.save();
};

exports.updateDepartment = async (id, department) => {
  return await Department.findByIdAndUpdate(id, department, { new: true }).populate('employees');
};

exports.deleteDepartment = async (id) => {
  return await Department.findByIdAndDelete(id);
};
