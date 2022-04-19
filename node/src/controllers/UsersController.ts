import { Request, Response } from 'express'
import { UsersService } from '../services/UsersService'

export class UsersController {
  async create(request: Request, response: Response): Promise<Response> {
    const usersService = new UsersService()
    const { email } = request.body
    try {
      const user = await usersService.create(email)
      return response.json(user)
    } catch (error) {
      return response.status(400).json({
        error: error.message
      })
    }
  }
}