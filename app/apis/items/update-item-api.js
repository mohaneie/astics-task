const express = require('express');
const router = express.Router();
const { authorized } = require('../../../lib/token');
const Item = require('../../controllers/item');

router.route('/item/:id').put(authorized, async (req, res) => {
    try {
        const { id } = req.params;
        const response = await Item.updateItem(id, req.body)
        return res.status(200).json({ message: 'Item is updated successfully', response });
    }
    catch (error) {
        console.log(error)
    }
})

module.exports = router;