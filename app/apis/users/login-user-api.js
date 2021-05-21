const express = require('express');
const router = express.Router();
const User = require('../../controllers/user');
const Password = require('../../../lib/password');
const Token = require('../../../lib/token');

router.route('/login').post(async (req, res) => {
    try {
        const { userName, password } = req.body;
        const finduser = await User.findUser(userName);
        if (!finduser) {
            return res.status(401).json({ message: 'Account is not exist in our database' });
        }
        const verifyPassword = await Password.match(password, finduser.password);
        if (verifyPassword) {
            const generateToken = await Token.accessToken(userName);
            delete req.body.password;
            const data = Object.assign({}, req.body, { accessToken: generateToken });
            const response = await User.userLogin(data);
            return res.status(200).json({ message: 'User is loggedIn successfully', code: 200, response });
        }
    }
    catch (error) {
        console.log(error)
    }
});

module.exports = router;