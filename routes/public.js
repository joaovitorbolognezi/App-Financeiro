//parte principal onde fica o encriptador de senha e nossa rota publica para cadastrar o usuario com um try/catch simples apenas de test
import express from 'express'
import bcrypt from 'bcrypt'
import prisma from '../lib/prisma.ts'
import jwt from 'jsonwebtoken'

const router = express.Router()
const  JWT_SECRET = process.env.JWT_SECRET

//cadastro
router.post('/cadastro', async (req,res) => {
    
    try{
    const user = req.body

    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(user.password, salt)

    await prisma.user.create({
        data: {
            name: user.name,
            password: hashPassword,
            email: user.email
        }
    })
    }
    catch(erro){
        res.status(500).json({mensage : "Erro no servidor!"})
        console.log(erro)
    }
})

//login

router.post('/login', async (req,res) => {
    try{
        const userInfo = req.body
        
        //procuro se o usuario existe pelo email já que declaramos ele como unico
        const user = await prisma.user.findUnique({ where: {email: userInfo.email}})

        //verifica no banco se tem o usuario com o email informado
        if(!user){
            return res.status(404).json({mesage: "Usuario nao encontrado!"})
        }
        
        // compara a senha do banco com a do banco de dados
        const isMatch = await bcrypt.compare(userInfo.password, user.password)

        //verifica se a senha é valida
        if (!isMatch){
            return res.status(400).json({mesage : "Senha incorreta!"})
        }

        //gerando o token JWT com expiraçao de 1 dia pois vamos deslogar o usuario pelo frontend
        const token = jwt.sign({id: user.id}, JWT_SECRET, { expiresIn: '1d'})
    
        res.status(200).json(token)

    }catch(erro){
        res.status(500).json({mensage: "Erro do login no servidor"})
        console.log(erro)
    }
})

export default router