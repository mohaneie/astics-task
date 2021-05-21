const User = require('../../model/schema/user');


const findUser = async (data) => {
    try {
        return await User.findOne({ userName: data });
    }

    catch (error) {
        console.log(error)
    }
}

const createUser = async (data) => {
    try{
        return await User.create(data);
    }

    catch(error){

    }
}

const userLogin = async (data) => {
    try {
        return await User.findOneAndUpdate({ userName: data.userName }, data, { new: true }).exec();
    }
    catch (error) {
        console.log(error)
    }
}


module.exports = { findUser, createUser, userLogin }