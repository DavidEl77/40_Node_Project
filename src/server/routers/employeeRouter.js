const express = require('express');
const employeeBLL = require('../BLL/employeeBLL');
const authMiddleware = require('../middlewares/authMiddleWare');

const router = express.Router();

// Get all employees
router.get('/', authMiddleware, async (req, res) => {
  const employees = await employeeBLL.getAllEmployees();
  res.json(employees);
});

// Get an employee by ID
router.get('/:id', authMiddleware, async (req, res) => {
  const employee = await employeeBLL.getEmployeeById(req.params.id);
  res.json(employee);
});

// Create a new employee
router.post('/', authMiddleware, async (req, res) => {
  const newEmployee = await employeeBLL.createEmployee(req.body);
  res.json(newEmployee);
});

// Update an employee by ID
router.put('/:id', authMiddleware, async (req, res) => {
  const updatedEmployee = await employeeBLL.updateEmployee(req.params.id, req.body);
  res.json(updatedEmployee);
});

// Delete an employee by ID
router.delete('/:id', authMiddleware, async (req, res) => {
  await employeeBLL.deleteEmployee(req.params.id);
  res.sendStatus(204);
});

module.exports = router;