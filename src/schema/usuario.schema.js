import {z} from 'zod'

const usuarioSchema = z.object({
    nome_usuario: z.string().min(3, 'nome é obrigatório'),
    email: z.string().email('endereço de email invalido'),
    senha: z.string().min(6, 'senha invalída, minimo de 6 digitos'),
    avatar: z.string().url('Url Invalida').optional()
})

export { usuarioSchema };