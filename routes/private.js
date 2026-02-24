import express from 'express'
import prisma from '../lib/prisma.ts'

const router = express.Router()

router.get('/list-users', async (req,res) => {
    try{

        const users = await prisma.user.findMany()

        res.status(200).json({mesage: "Usuarios Listados: ", users})
    }catch(erro){
        res.status(500).json({mensage : "Erro no servidor!"})
        console.log(erro)
    }
})

export default router