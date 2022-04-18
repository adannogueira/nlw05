import { Router } from 'express';
import { SettingsRepository } from './repositories/SettingsRepository';

export const routes = Router()

routes.post('/settings', async (req, res) => {
  const { chat, username } = req.body
  const setting = SettingsRepository.create({
    chat,
    username
  })

  await SettingsRepository.save(setting)
  return res.json(setting)
})