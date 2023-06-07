const Employee = require('../models/employee');

// CRUD Functions
exports.getAllEmployees = async () => {
  return await Employee.find().populate('departmentID')
};

exports.getEmployeeById = async (id) => {
  return await Employee.findById(id).populate('departmentID')
};

exports.createEmployee = async (employee) => {
  const newEmployee = new Employee(employee);
  return await newEmployee.save();
};

exports.updateEmployee = async (id, employee) => {
  return await Employee.findByIdAndUpdate(id, employee, { new: true }).populate('departmentID')
};

exports.deleteEmployee = async (id) => {
  return await Employee.findByIdAndDelete(id);
};

// Other functions
exports.getEmployeesByDepartmentId = async (departmentId) => {
  return await Employee.find({ departmentID: departmentId }).populate('departmentID')
};

exports.getEmployeesNotInDepartment = async (departmentId) => {
  return await Employee.find({ departmentID: { $ne: departmentId } });
};

exports.deleteEmployees = async (filter) => {
  await Employee.deleteMany(filter);
}