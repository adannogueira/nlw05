import { SettingsRepository } from '../repositories/SettingsRepository'

export class SettingsService {
  constructor(private readonly settingsRepository = SettingsRepository) {}
  
  async create(chat: boolean, username: string) {
    const setting = this.settingsRepository.create({
      chat,
      username
    })
    const userAlreadyExists = await this.settingsRepository.findOneBy({
      username
    })
    if (userAlreadyExists) {
      throw new Error('User already exists')
    }
    await this.settingsRepository.save(setting)
    return setting
  }
}
