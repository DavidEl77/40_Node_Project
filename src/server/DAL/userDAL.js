const User = require('../models/user');
const fs = require('fs');
const path = require('path');

exports.getAllUsers = async () => {
   return await User.find({}, { password: 0 });
};

exports.getUserById = async (id) => {
  return await User.findById(id, { password: 0 });
};

exports.createUser = async (user) => {
  const newUser = new User(user);
  return await newUser.save();
};

exports.updateUser = async (id, user) => {
  return await User.findByIdAndUpdate(id, user, { new: true });
};

exports.deleteUser = async (id) => {
  return await User.findByIdAndDelete(id);
};

// Other Functions
const actionsFilePath = path.join(__dirname, '../data/actions.json');

exports.getUserActions = async () => {
  const actionsData = await fs.promises.readFile(actionsFilePath, 'utf-8');
  const actions = JSON.parse(actionsData).actions;
  return actions;
}

exports.logUserAction = async (newAction) => {
  const actions = await getUserActions();
  actions.push(newAction);
  const newData = JSON.stringify({ actions });
  await fs.promises.writeFile(actionsFilePath, newData);
}

exports.getUserByUsername = async (username) => {
  return await User.findOne({ username }, { password: 0 });
}