const user = require('../repository/user')


async function getAll(){
    var users = await user.getAll();
    if(!users){
        return {
            statusCode :400,
            msg: 'Erro ao buscar usuários'
        };
    }
    return users;
}

async function get(id){
    var u = await user.get(id);
    if(!u){
        return {
            statusCode :400,
            msg: 'Error usuário não foi encontrado'
        };
    }   
    return u;
}

async function post(p){
    var u = await user.post(p);
    if(!u){
        return {
            statusCode:400,
            msg: 'Error: ao inserir a user '+ p.nome
        };
    }
    return u;
}

async function put(p){
    var u = await user.put(p);

    if(!u){
        return {
            statusCode:400,
            msg: 'Error user não encontrada'
        };
    }
    return u;
}

async function del(id){
    var u = await user.del(id);
    if(!u){
        return {
            statusCode:400,
            msg:'Erro user não encontrada'
        };
    }
    return u;
}

module.exports = {getAll, get, post, put , del};