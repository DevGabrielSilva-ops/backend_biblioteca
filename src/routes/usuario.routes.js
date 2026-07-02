import {Router} from 'express'
import usuarioController from '../controller/usuario.controller.js'
import { validar, validarId } from '../middlewares/validacao.middlewares.js'
import { usuarioSchema, usuarioIdSchema} from '../schema/usuario.schema.js'
const router = Router()

router.post('/usuarios', validar(usuarioSchema) ,  usuarioController.criarUsuarioController )
router.get('/usuarios', usuarioController.listarUsuariosController)
router.get('/usuarios/:id',validarId(usuarioIdSchema), usuarioController.listarUsuariosPorIdController)
router.put('/usuarios/:id',validarId(usuarioIdSchema), usuarioController.alterarUsuarioController)
router.delete('/usuarios/:id',validarId(usuarioIdSchema), usuarioController.deletarUsuarioController)


export default router