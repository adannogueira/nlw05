import { AppDataSource } from '../database';
import { Users } from '../entities/User';

export const UsersRepository = AppDataSource.getRepository(Users)
