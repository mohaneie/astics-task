const jwt = require('jsonwebtoken');
const config = require('config');
const jwtEnv = config.get('jwt');


const accessToken = async (payload) => {
    try {
        const response = await jwt.sign({ data: payload }, jwtEnv.ACCESS_TOKEN_SECRET, { algorithm: "HS256", expiresIn: jwtEnv.ACCESS_TOKEN_LIFE });
        return response;
    }
    catch (error) {
        console.log(error)
    }
}

const authorized = async (req, res, next) => {
    try {
        const { access_token } = req.headers;
        if (!access_token) {
            let message = "Token key not found"
            return res.status(401).json({ message, code: 401, response: {} })
        }
        const verify = await jwt.verify(access_token, jwtEnv.ACCESS_TOKEN_SECRET);
        if (verify) next();
    }
    catch (error) {
        res.status(401).json({ message: error.name, code: 401,  error });
    }
}


module.exports = { accessToken, authorized }