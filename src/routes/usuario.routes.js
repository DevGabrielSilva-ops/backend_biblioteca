import {Router} from 'express'
import usuarioController from '../controller/usuario.controller.js'
import { validar } from '../middlewares/validacao.middlewares.js'
import { usuarioSchema } from '../schema/usuario.schema.js'
const router = Router()

router.post('/usuarios', validar(usuarioSchema) ,  usuarioController.criarUsuarioController )
router.get('/usuarios', usuarioController.listarUsuariosController)
router.put('/usuarios/:id', usuarioController.alterarUsuarioController)
router.delete('/usuarios/:id', usuarioController.deletarUsuarioController)

export default router