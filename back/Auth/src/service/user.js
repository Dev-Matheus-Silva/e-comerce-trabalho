const userModel = require('../model/user');
const bcrypt = require('bcryptjs');

exports.insert = async function (reference) {
    const salt = bcrypt.genSaltSync();
    const password = bcrypt.hashSync(reference.password, salt);

    const user = new userModel({
        name: reference.name,
        email: reference.email,
        password: password,
        salt: salt
    });

    return await user.save();
}

exports.login = async function (login, password) {
    const user = await userModel.findOne({ email: login });

    if (user) {
        const checkPassword = bcrypt.hashSync(password, user.salt);
        if (checkPassword === user.password) {
            return "Entrou!";
        }
    }

    throw new Error("Usuário ou senha inválidos");
}