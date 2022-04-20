import express from 'express'
import { createServer } from 'http'
import { Server } from 'socket.io'
import './database'
import 'reflect-metadata'
import { AppDataSource } from './database'
import { routes } from './routes'

const app = express()
const http = createServer(app)
const io = new Server(http)

io.on('connection', (socket) => {
  console.log('User connected')
  socket.on('disconnect', () => {
    console.log('User disconnected')
  })
})

AppDataSource.initialize()
app.use(express.json())
app.use(routes)

http.listen(3000, () => console.log('Server listening on port 3000!'))
