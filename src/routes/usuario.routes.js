import {Router} from 'express'
import usuarioController from '../controller/usuario.controller.js'
const router = Router()

router.post('/usuarios', usuarioController.criarUsuarioController )

export default router