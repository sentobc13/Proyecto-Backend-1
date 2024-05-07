const { User } = require('../models/index.js');
const bcrypt = require('bcryptjs');

const UserController = {
    async create(req, res) {
        try {
            const password = bcrypt.hashSync(req.body.password,10)
            const user = await User.create({...req.body, password, role:"user"});
            res.status(201).send({ msg: 'Usuario creado con éxito', user });
        } catch (error) {
            console.error(error);
            res.status(500).send({ msg:'Error interno del servidor',error});
        }
    }
};

module.exports = UserController;


