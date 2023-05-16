import fastfiy from 'fastify'
import { PrismaClient } from '@prisma/client'
const app = fastfiy()
const prisma = new PrismaClient()
app.post('/logon', async () => {
  const users = await prisma.user.findMany()
  return users
})

app
  .listen({
    port: 3000,
  })
  .then(() => {
    console.log('Servidor HTTP rodando na porta http://localhost:3000')
  })
