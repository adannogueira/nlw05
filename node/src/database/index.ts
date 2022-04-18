import { DataSource } from 'typeorm'
import { Setting } from '../entities/setting'

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: './database.sqlite',
  entities: [Setting],
  synchronize: true
})
