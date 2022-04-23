import { ConnectionsRepository } from '../repositories/ConnectionsRepository'

export class ConnectionsService {
  constructor(private readonly connectionsRepository = ConnectionsRepository) {}

  async create(socket_id: string, user_id: string, admin_id?: string) {
    const connection = this.connectionsRepository.create({
      socket_id,
      user_id,
      admin_id
    })
    await this.connectionsRepository.save(connection)
    return connection
  }

  async findByUserId (user_id: string) {
    const connection = this.connectionsRepository.findOneBy({ user_id })
    return connection
  }

  async createOrUpdate (socket_id: string, user_id: string, admin_id?: string) {
    const connection = await this.findByUserId(user_id)
    return connection
      ? await this.connectionsRepository.update(connection.id, { socket_id })
      : await this.create(socket_id, user_id)  
  }

  async listNotAttended () {
    const connections = await this.connectionsRepository.find({
      where: {
        admin_id: null
      },
      relations: ['user']
    })
    return connections
  }
}
