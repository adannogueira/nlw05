import { Request, Response } from 'express'
import { UsersService } from '../services/UsersService'

export class UsersController {
  constructor(private readonly usersService = new UsersService()) {}

  async create(request: Request, response: Response): Promise<Response> {
    const { email } = request.body
    try {
      const user = await this.usersService.create(email)
      return response.json(user)
    } catch (error) {
      return response.status(400).json({
        error: error.message
      })
    }
  }
}