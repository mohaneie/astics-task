const express = require('express');
const router = express.Router();
const Item = require('../../controllers/item');
const { authorized } = require('../../../lib/token');

router.route('/item').post(authorized, async (req, res) => {
    try {
    const response = await Item.createItem(req.body);
    return res.status(200).json({ message: 'Item is created successfully', response });
    }
    catch (error) {
        console.log(error)
    }
})

module.exports = router;