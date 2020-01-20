const user = require('../service/user')

async function getAll(req, res) {
    return await user
        .getAll()
        .catch(err => {
            res.status(err.statusCode || 500).send(err);
        })
        .then(q => {
            return q.status(200).send(q);
        });
}

async function get(req, res) {
    return await user
        .get(req.params.id)
        .catch(err => {
            res.status(err.statusCode || 500).send(err)
        })
        .then(q => {
            return res.status(200).send(q);
        });
}

async function post(req, res) {
    return await user
        .post(req.body.user)
        .catch(err => {
            res.status(err.statusCode || 500).send(err);
        })
        .then(q => {
            return res.status(200).send('ok');
        });
}

async function put(req, res) {
    return await user
        .put(req.body.user)
        .catch(err => {
            res.status(err.statusCode || 500).send(err);
        })
        .then(q => {
            return res.status(200).send('ok')
        });
}

async function del(req, res) {
    return await user
        .del(req.params.id)
        .catch(err => {
            res.status(err.statusCode || 500).send(err)
        })
        .then(q => {
            return res.status(200).send('ok');
        });
}


module.exports = { getAll, get, post, put, del };