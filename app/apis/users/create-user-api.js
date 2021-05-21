const express = require('express');
const router = express.Router();
const User = require('../../controllers/user');
const Password = require('../../../lib/password');

router.route('/user').post(async (req, res) => {
    try {
        const { userName, password } = req.body;
        const findUser = await User.findUser(userName);
        if (!findUser) {
            const hashPassword = await Password.hash(password);
            req.body.password = hashPassword;
            const response = await User.createUser(req.body);
            return res.status(200).json({ message: 'user is created successfully', response });
        }
        res.status(400).json({ message: 'user is already existed in our database' })
    }

    catch (error) {
        console.log(error)
    }
})

module.exports = router;