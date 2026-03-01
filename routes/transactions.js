import express from 'express'
import prisma from '../lib/prisma.ts'

const router = express.Router()

//insere um valor para transacao
router.post('/insereValor', async(req, res) =>{
    try{
        const valorIns = req.body

        const transacaoInserida = await prisma.transaction.create({
            data: {
                description:  valorIns.description,
                amount:       valorIns.amount,
                type:         valorIns.type,
                category:     valorIns.category,
                userId:       req.userId
            }
        })
        res.status(201).json({message : 'Valor inserido com sucesso!', transacaoInserida})

    }catch(erro){
        res.status(400).json({message : 'Valor invalido, não use valores iguais a 0 ou negativos!'})
        console.log(erro)
    }
})


//Lista as transações
router.get('/listaTransacoes', async(req,res) => {
    try{
        const lista = await prisma.transaction.findMany({
            where: {userId: req.userId}
        })

        //calcula o valor com entradas e saidas e o saldo total
        const entradas = lista
            .filter(transacao => transacao.type === 'entrada')
            .reduce((acumulador,transacao) => acumulador + transacao.amount, 0)

        const saidas = lista
            .filter(transacao => transacao.type === 'saida')
            .reduce((acumulador,transacao) => acumulador + transacao.amount, 0)

        const saldo = entradas - saidas

        res.status(200).json({message: 'Lista de transações: ', saldo, entradas, saidas, lista}) 

    }catch(erro){
        res.status(500).json({message : 'Erro ao buscar as transições!'})
        console.log(erro)
    }
})

//altera a transacao do usuario baseado em seu id / obs o id é o da transacao e tem que alterar no thunder para teste
router.put('/alteraTransacoes/:id', async(req,res) =>{
    try{
        const {id} = req.params
        const dados = req.body

        const transacao = await prisma.transaction.update({
            where: {id: Number(id)},
            data: dados
        })
        res.status(201).json({message : 'Transação altreraçao com sucesso!', transacao})

    }catch(erro){
        res.status(500).json({message : 'Erro ao alterar a transação!'})
        console.log(erro)
    }
})

//deleta a transacao do usuario baseado no seu id / obs o id é o da transacao e tem que alterar no thunder para teste
router.delete('/deletaTransacao/:id', async(req,res) => {
    try{
        const {id} = req.params

        await prisma.transaction.delete({
            where: {id: Number(id)},
        })

    res.status(200).json({message : 'Transação deletada com sucesso!'})

    }catch(erro){
        res.status(500).json({message : 'Erro ao deletar a transação!'})
        console.log(erro)
    }
})

export default router