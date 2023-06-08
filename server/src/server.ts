import fastfiy from 'fastify'
import 'dotenv/config'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import { memoriesRoutes } from './routes/memories'
import { authRoutes } from './routes/auth'
const app = fastfiy()
app.register(cors, {
  origin: true, // Todas as urls do front-end poderão acessar nosso back-end
})
app.register(jwt, {
  secret: 'spacetime',
})
app.register(memoriesRoutes)
app.register(authRoutes)
app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('Servidor HTTP rodando na porta http://localhost:3333')
  })
