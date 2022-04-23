import { io } from '../app'
import { ConnectionsService } from '../services/ConnectionsService'
import { MessagesService } from '../services/MessagesService'
import { UsersService } from '../services/UsersService'

io.on('connect', socket => {
  const connectionsService = new ConnectionsService()
  const usersService = new UsersService()
  const messagesService = new MessagesService()

  socket.on('client_first_access', async params => {
    const { text, email } = params
    const user = await usersService.findOrCreateByEmail(email)
    await connectionsService.createOrUpdate(socket.id, user.id)
    await messagesService.create(user.id, text)
  })
})