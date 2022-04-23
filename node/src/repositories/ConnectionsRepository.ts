import { AppDataSource } from '../database';
import { Connections } from '../entities/Connection';

export const ConnectionsRepository = AppDataSource.getRepository(Connections)
