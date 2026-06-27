import {Router} from 'express'
import usuarioController from '../controller/usuario.controller.js'
const router = Router()

router.post('/usuarios', usuarioController.criarUsuarioController )
router.get('/usuarios', usuarioController.listarUsuariosController)

export default router