const TokenService = require('../services/tokenService')

class AuthController {

    async login (req,res) {
        const {login, password} = req.body
        if (login == 'admin' && password == '1234') {
            const tokens = TokenService.generateToken({login})
            return res.status(201).json({tokens})
        }
        else {
            return res.status(400).json({message:'Ошибка авторизации'})
        }
    }
}

module.exports = new AuthController()