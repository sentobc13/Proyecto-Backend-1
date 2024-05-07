const { User, Token, Sequelize } = require('../models/index.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { jwt_secret } = require('../config/config.json')['development'];
const { Op } = Sequelize;


const UserController = {
    async create(req, res) {
        try {
            const password = bcrypt.hashSync(req.body.password, 10)
            const user = await User.create({ ...req.body, password, role: "user" });
            res.status(201).send({ msg: 'Usuario creado con éxito', user });
        } catch (error) {
            console.error(error);
            res.status(500).send({ msg: 'Error interno del servidor', error });
        }
    },
    async login(req, res) {
        try {
            const user = await User.findOne({
                where: {
                    email: req.body.email
                }
            });
            if (!user) {
                return res.status(400).send({ msg: "Usuario o contraseña incorrectos" });
            }

            const isMatch = await bcrypt.compare(req.body.password, user.password);
            if (!isMatch) {
                return res.status(400).send({ msg: "Usuario o contraseña incorrectos" });
            }

            const token = jwt.sign({ id: user.id }, jwt_secret);
            Token.create({ token, UserId: user.id });
            res.send({ msg: 'Bienvenid@ ' + user.name, user, token });

        } catch (error) {
            console.error(error);
            res.status(500).send('Error interno del servidor');
        }
    },

    async logout(req, res) {
        try {
            await Token.destroy({
                where: {
                    [Op.and]: [
                        { UserId: req.user.id },
                        { token: req.headers.authorization }
                    ]
                }
            });
            res.send({ msg: 'Desconectado con éxito' })
        } catch (error) {
            console.log(error)
            res.status(500).send({ msg: 'hubo un problema al tratar de desconectarte' })
        }
    }
};

module.exports = UserController;


