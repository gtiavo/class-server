const { request, response } = require('express');

const getUsuarios = ( req = request, res = response ) => {

res.json({
    msg: 'getUsuarios'
})

}


module.exports = {
    getUsuarios
}