import { SettingsRepository } from '../repositories/SettingsRepository'

export class SettingsService {
  async create(chat: boolean, username: string) {
    const setting = SettingsRepository.create({
      chat,
      username
    })
    const userAlreadyExists = await SettingsRepository.findOneBy({
      username
    })
    if (userAlreadyExists) {
      throw new Error('User already exists')
    }
    await SettingsRepository.save(setting)
    return setting
  }
}
