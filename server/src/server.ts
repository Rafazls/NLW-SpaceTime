import fastfiy from 'fastify'
import cors from '@fastify/cors'
import { memoriesRoutes } from './routes/memories'
const app = fastfiy()
app.register(cors, {
  origin: true, // Todas as urls do front-end poderão acessar nosso back-end
})
app.register(memoriesRoutes)
app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('Servidor HTTP rodando na porta http://localhost:3333')
  })
