import express from 'express'
import prisma from '../lib/prisma.ts'

const router = express.Router()

router.get('/list-users', async (req,res) => {
    try{

        const users = await prisma.user.findMany()

        res.status(200).json({message: "Usuarios Listados: ", users})
    }catch(erro){
        res.status(500).json({message : "Erro no servidor!"})
        console.log(erro)
    }
})

export default router