const bcrypt = require('bcrypt');
const saltRounds = 8;

const hash = async (password) => {
    if (!password) {
        const error = TypeError('Password Should Not To Be Empty')
        throw error
    }

    return bcrypt.hash(password, saltRounds);
}

const match = async (password, hashedPassword) => {
    if (!password && !hashedPassword) {
        const error = TypeError('Password/Hash Should Not Be Empty');
        throw error;
    }
    return bcrypt.compare(password, hashedPassword);
}

module.exports = { hash, match }