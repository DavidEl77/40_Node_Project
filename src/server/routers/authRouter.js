const express = require('express');
const authBLL = require('../BLL/authBLL');

const router = express.Router();

router.post('/login', async (req, res) => {
    const { username, email } = req.body;
    try {
        const token = await authBLL.authenticateUser(username, email);
        res.json({ token })
    } catch (error) {
        res.status(401).json({ error: error.message })
    }
})

router.get('/logout', (req,res) => {
    res.clearCookie('token');
    res.redirect('/login');
});

module.exports = router