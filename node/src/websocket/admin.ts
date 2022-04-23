import { io } from '../app'
import { ConnectionsService } from '../services/ConnectionsService'

io.on('connect', async socket => {
  const connectionsService = new ConnectionsService()
  const notAttendedClients = await connectionsService.listNotAttended()

  io.emit('admin_list_all_users', notAttendedClients)
})