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

  async findByUsername(username: string) {
    const setting = await this.settingsRepository.findOneBy({
      username
    })
    return setting
  }

  async update(username: string, chat: boolean) {
    const setting = await this.settingsRepository.findOneBy({
      username
    })
    if (!setting) {
      throw new Error('User not found')
    }
    setting.chat = chat
    await this.settingsRepository.save(setting)
    return setting
  }

  async listSettings() {
    const setting = await this.settingsRepository.find()
    return setting
  }
}
