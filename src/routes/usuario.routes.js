import {Router} from 'express'
import usuarioController from '../controller/usuario.controller.js'
const router = Router()

router.post('/usuarios', usuarioController.criarUsuarioController )
router.get('/usuarios', usuarioController.listarUsuariosController)
router.put('/usuarios/:id', usuarioController.alterarUsuarioController)
router.delete('/usuarios/:id', usuarioController.deletarUsuarioController)

export default router