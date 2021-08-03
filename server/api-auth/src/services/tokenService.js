const jwt = require('jsonwebtoken');

class TokenService {
    generateToken (payload) {
        const accessToken = jwt.sign(payload, process.env.SECRET, {expiresIn: '30d'});
        return {
            accessToken,
        }
    }
}

module.exports = TokenService;