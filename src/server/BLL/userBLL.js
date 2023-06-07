const userDAL = require('../DAL/userDAL');
const config = require('../data/config.json')

exports.getAllUsers = async () => {
  return await userDAL.getAllUsers();
};

exports.getUserById = async (id) => {
  return await userDAL.getUserById(id);
};

exports.createUser = async (user) => {
  await userDAL.createUser(user);
  return 'User created successfully!'
};

exports.updateUser = async (id, user) => {
  await userDAL.updateUser(id, user);
  return 'User updated successfully!'
};

exports.deleteUser = async (id) => {
  await userDAL.deleteUser(id);
  return 'User deleted successfully!'
};

// Other Functions
// Provides the user's actions for the current day
exports.getUserActionsById = async (userId) => {
  const actions = await userDAL.getUserActions();
  const today = new Date().toLocaleDateString();
  return actions.filter(action => action.id === userId && action.date === today);
}

// logs the user's action for the current day, and blocks the user if he exceeded the actions limit
exports.logUserAction = async (userId) => {
  const today = new Date().toLocaleDateString();
  const actions = await userDAL.getUserActions();
  const userActions = actions.filter(action => action.id === userId && action.date === today);
  const configMaxActions = config.filter(user => user.id === userId)[0].actionsLimit;
  const maxActions = userActions.length > 0 ? userActions[0].maxActions : configMaxActions;
  const actionsAllowed = userActions.length > 0 ? userActions[0].actionsAllowed : maxActions;
  if (actionsAllowed === 0) {
    throw new Error('User has exceeded the maximum actions allowed for today');
  }
  const newAction = { id: userId, maxActions, date: today, actionsAllowed: actionsAllowed - 1 };
  await userDAL.logUserAction(newAction)
}