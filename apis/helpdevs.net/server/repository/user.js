const config = require('../config/env')
const user = require('../model/user')
let MYSQL = config.dataConfig.MYSQL;
const Sequelize = require('sequelize');


const sequelize = new Sequelize(MYSQL.database, MYSQL.user, MYSQL.password, {
    host: MYSQL.host,
    por: MYSQL.port,
    dialect: 'mysql',
    pool: {
        min: 0,
        max: 5,
        idle: 10000
    }
});

sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully');
    })
    .catch(err => {
        console.error('Unable to connect to the database: ' + err);
    });

async function get(id) {
    return await user.user(sequelize, Sequelize).findOne({
        where: {
            id: id
        }
    });
}
async function getAll() {
    return await user.user(sequelize, Sequelize).findAll();
}
async function post(p) {
    await user.user(sequelize, Sequelize).create(p);
}
async function put(p) {
    await user.user(sequelize, Sequelize).update(p,
        {
            where: {
                id: p.id
            }
        });
}
async function del(id) {
    await user.user(sequelize, Sequelize).destroy({ where: { id: id } });
}

module.exports = { get, getAll, post, put, del };