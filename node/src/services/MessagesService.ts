import { MessagesRepository } from '../repositories/MessagesRepository'

export class MessagesService {
  constructor(private readonly messagesRepository = MessagesRepository) {}

  async create(user_id: string, text: string, admin_id?: string) {
    const message = this.messagesRepository.create({
      admin_id,
      text,
      user_id
    })
    await this.messagesRepository.save(message)
    return message
  }

  async listByUser(user_id: string) {
    const messages = await this.messagesRepository.find({
      where: {
        user_id
      },
      relations: ['user']
    })
    return messages
  }
}
