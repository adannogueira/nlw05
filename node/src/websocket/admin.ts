import { io } from '../app'
import { ConnectionsService } from '../services/ConnectionsService'
import { MessagesService } from '../services/MessagesService'

io.on('connect', async socket => {
  const connectionsService = new ConnectionsService()
  const notAttendedClients = await connectionsService.listNotAttended()
  const messagesService = new MessagesService()
  io.emit('admin_list_all_users', notAttendedClients)

  socket.on('admin_list_messages_by_user', async (params, cb) => {
    const { user_id } = params
    const allMessages = await messagesService.listByUser(user_id)
    cb(allMessages)
  })

  socket.on('admin_send_message', async params => {
    const { user_id, text } = params
    await messagesService.create(user_id, text, socket.id)
    const { socket_id } = await connectionsService.findByUserId(user_id)

    io.to(socket_id).emit('admin_send_to_client', { socket_id: socket.id, text })
  })

  socket.on('admin_user_in_support', async params => {
    const { user_id } = params
    await connectionsService.updateAttended(user_id, socket.id)
    const notAttendedClients = await connectionsService.listNotAttended()
    io.emit('admin_list_all_users', notAttendedClients)
  })
})