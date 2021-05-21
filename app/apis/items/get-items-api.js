const express = require('express');
const router = express.Router();
const { authorized } = require('../../../lib/token');
const Item = require('../../controllers/item');

router.route('/item').get(authorized, async (req, res) => {
    try {
    const response = await Item.getItems();
    return res.status(200).json({ message: 'Items got successfully', response });
    }
    catch (error) {
        console.log(error)
    }
})

module.exports = router;