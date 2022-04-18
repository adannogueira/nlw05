import { DataSource } from 'typeorm'
import { Settings } from '../entities/Setting'
import { Users } from '../entities/User'

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: './database.sqlite',
  entities: [Settings, Users],
  migrations: [__dirname + '/migrations/*.ts'],
})
