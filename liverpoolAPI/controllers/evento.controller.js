let mysql = require('mysql')
let config = require('../helpers/config')
let conexion = mysql.createConnection(config)

module.exports.get_user_id = (request, response) => {
    let sql = `SELECT * FROM user WHERE idUsuario = ?`
    let evento = request.body
    conexion.query(sql, [request.params.id]), (error, results, fields) => {
        if(error) 
            response.send(error)
        response.json(results)
    }
}

module.exports.get_user = (request, response) => {
    let sql = `SELECT * FROM user WHERE correo = ?`
    let evento = request.body
    conexion.query(sql, [evento.correo]), (error, results, fields) => {
        if(error) 
            response.send(error)
        response.json(results)
    }
}

module.exports.get_product = (request, response) => {
    let sql = `SELECT * FROM producst WHERE nombreProducto LIKE ?`
    let evento = request.body
    conexion.query(sql, [evento.nombreProducto]), (error, results, fields) => {
        if(error)
            response.send(error)
        response.json(results)
    } 
}