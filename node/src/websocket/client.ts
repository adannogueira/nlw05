import { io } from '../app'
import { ConnectionsService } from '../services/ConnectionsService'
import { MessagesService } from '../services/MessagesService'
import { UsersService } from '../services/UsersService'

interface Params {
  text: string
  email: string
}

io.on('connect', socket => {
  const connectionsService = new ConnectionsService()
  const usersService = new UsersService()
  const messagesService = new MessagesService()

  socket.on('client_first_access', async params => {
    const { text, email } = params as Params
    const user = await usersService.findOrCreateByEmail(email)
    await connectionsService.createOrUpdate(socket.id, user.id)
    await messagesService.create(user.id, text)

    const messages = await messagesService.listByUser(user.id)
    socket.emit('client_list_all_messages', messages)

    const allUsers = await connectionsService.listNotAttended()
    io.emit('admin_list_all_users', allUsers)
  })

  socket.on('client_send_to_admin', async params => {
    const { text, socket_admin_id } = params
    const { user_id } = await connectionsService.findBySocketId(socket.id)
    const message = await messagesService.create(user_id, text)
    io.to(socket_admin_id).emit('admin_receive_message', {
      message,
      socket_id: socket.id
    })
  })
})