import { Request, Response } from 'express'
import { MessagesService } from '../services/MessagesService'

export class MessagesController {
  async create(request: Request, response: Response): Promise<Response> {
    const messagesService = new MessagesService()
    const { admin_id, text, user_id } = request.body
    try {
      const message = await messagesService.create(
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
}