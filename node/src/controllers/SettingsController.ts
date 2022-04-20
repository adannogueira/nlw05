import { Request, Response } from 'express'
import { SettingsService } from '../services/SettingsService'

export class SettingsController {
  constructor(private readonly settingsService = new SettingsService()) {}

  async create(request: Request, response: Response): Promise<Response> {
    const { chat, username } = request.body
    try {
      const setting = await this.settingsService.create(chat, username)
      return response.json(setting)
    } catch (error) {
      return response.status(400).json({
        error: error.message
      })
    }
  }
}