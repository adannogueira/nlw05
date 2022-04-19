import { AppDataSource } from '../database';
import { Messages } from '../entities/Message';

export const MessagesRepository = AppDataSource.getRepository(Messages)
