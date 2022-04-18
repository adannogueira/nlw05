import { AppDataSource } from '../database';
import { Settings } from '../entities/Setting';

export const SettingsRepository = AppDataSource.getRepository(Settings)
