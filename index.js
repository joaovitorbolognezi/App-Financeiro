//import na dotenv para resolver o problema da lib/prisma.ts, importando o express e o public routes de cadastro e onde liga o servidor
import 'dotenv/config'
import express from 'express';
import publicRoutes from './routes/public.js'
import privateRoutes from './routes/private.js'

const app = express()
app.use(express.json())

app.use('/', privateRoutes)
app.use('/', publicRoutes)

app.listen(3000, () => console.log("Servidor aberto!"))