const userService = require('../service/user')

exports.post = async (req, res, next) => {
    const user = req.body;
    const response = await userService.insert(user);
    res.status(201).send(response);
};

exports.login = async (req, res, next) => {
    const credentials = req.body;
    try {
        const response = await userService
            .login(credentials.email, credentials.password);

        res.status(200).send(response);
    } catch (error) {
        res.status(403).send(error);
    }
}