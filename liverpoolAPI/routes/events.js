let express = require('express')
let router = express.Router()
let eventoController = require('../controllers/evento.controller')

router.get('/user/:id', eventoController.get_user_id)
router.get('/product', eventoController.get_product)
router.get('/favorites', eventoController.get_favorites)
//router.post('/eventos', eventoController.eventos_save)
//router.put('/eventos/:id', eventoController.update_eventos)
//router.delete('/eventos/:id', eventoController.eventos_delete)
