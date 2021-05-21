const Item = require('../../model/schema/item');


const createItem = async (data) => {
    try {
        return await Item.create(data);
    }
    catch (error) {
        console.log(error)
    }
}

const getItems = async () => {
    try {
         return await Item.find({}).exec();
    }
    catch (error) {
        console.log(error)
    }
}

const updateItem = async (query, data) => {
    try {
        return await Item.findByIdAndUpdate({ _id: query }, data, { new: true }).exec();

    }
    catch (error) {
        console.log(error)
    }
}

const deleteItem = async (query) => {
    try {
        return await Item.findOneAndDelete({ _id: query })
    }
    catch (error) {
        console.log(error)
    }
}

module.exports = { createItem, getItems, updateItem, deleteItem }