const axios = require('axios');
const jwt = require('jsonwebtoken');

const SECRET_KEY = 'mySecretKey';

exports.getUserByUsername(username) = async () => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users?username=${username}`);
    return response.data[0];
};

exports.getUserByEmail(email) = async () => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users?email=${email}`);
    return response.data[0];
};

exports.createUserToken(user) = () => {
    const payload = { id: user.id, username: user.username, email: user.email };
    const token = jwt.sign(payload, SECRET_KEY);
    return token
};