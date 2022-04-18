import { Request, Response } from 'express'
import { SettingsRepository } from '../repositories/SettingsRepository'
import { SettingsService } from '../services/SettingsService'

export class SettingsController {
  async create(request: Request, response: Response): Promise<Response> {
    const settingsService = new SettingsService()
    const { chat, username } = request.body
    try {
      const setting = await settingsService.create(chat, username)
      return response.json(setting)
    } catch (error) {
      return response.status(400).json({
        error: error.message
      })
    }
  }
}