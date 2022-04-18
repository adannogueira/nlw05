import { AppDataSource } from '../database';
import { Setting } from '../entities/setting';

export const SettingsRepository = AppDataSource.getRepository(Setting)
