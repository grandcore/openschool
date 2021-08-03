const TokenService = require('../services/tokenService')


class AuthController {

    async login (req,res) {
        const {login, password} = req.body
        if (login == 'admin@mail.ru' && password == '1234') {
            console.log(login, password)    //! development test
            const tokens = TokenService.generateToken({login})
            console.log(tokens)     //! development test
            return res.status(201).json({tokens})
        }
        else {
            return res.status(400).json({message:'Ошибка авторизации'})
        }
    }
}

module.exports = new AuthController()