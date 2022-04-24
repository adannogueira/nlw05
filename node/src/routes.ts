import { Router } from 'express';
import { MessagesController } from './controllers/MessagesController';
import { SettingsController } from './controllers/SettingsController';
import { UsersController } from './controllers/UsersController';

const routes = Router()
const settingsController = new SettingsController()
const usersController = new UsersController()
const messagesController = new MessagesController()

routes.post('/settings', settingsController.create.bind(settingsController))
routes.post('/users', usersController.create.bind(usersController))
routes.post('/messages', messagesController.create.bind(messagesController))

routes.put('/settings/:username', settingsController.update.bind(settingsController))

routes.get('/messages/:user_id', messagesController.listByUser.bind(messagesController))
routes.get('/settings/:username', settingsController.findByUsername.bind(settingsController))
routes.get('/settings', settingsController.listSettings.bind(settingsController))

export { routes }
