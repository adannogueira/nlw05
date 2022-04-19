import { MessagesRepository } from '../repositories/MessagesRepository'

export class MessagesService {
  async create(user_id: string, text: string, admin_id?: string) {
    const message = MessagesRepository.create({
      admin_id,
      text,
      user_id
    })
    await MessagesRepository.save(message)
    return message
  }
}
