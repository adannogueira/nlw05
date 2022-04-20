import { Request, Response } from 'express'
import { MessagesService } from '../services/MessagesService'

export class MessagesController {
  constructor(private readonly messagesService = new MessagesService()) {}
  
  async create(request: Request, response: Response): Promise<Response> {
    const { admin_id, text, user_id } = request.body
    try {
      const message = await this.messagesService.create(
        user_id,
        text,
        admin_id
      )
      return response.json(message)
    } catch (error) {
      return response.status(400).json({
        error: error.message
      })
    }
  }

  async listByUser(request: Request, response: Response): Promise<Response> {
    const { user_id } = request.params
    try {
      const messages = await this.messagesService.listByUser(user_id)
      return response.json(messages)
    } catch (error) {
      return response.status(400).json({
        error: error.message
      })
    }
  }
}