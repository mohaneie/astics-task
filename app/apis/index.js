const createUser = require('./users/create-user-api');
const loginUser = require('./users/login-user-api');
const createItem = require('./items/create-item-api');
const getItems = require('./items/get-items-api');
const updateItem = require('./items/update-item-api');
const deleteItem = require('./items/delete-item-api');


module.exports = (app) => {
    app.use(createUser);
    app.use(loginUser);
    app.use(createItem);
    app.use(getItems);
    app.use(updateItem);
    app.use(deleteItem);
}