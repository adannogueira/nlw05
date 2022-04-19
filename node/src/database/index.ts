import { DataSource } from 'typeorm'
import { Messages } from '../entities/Message'
import { Settings } from '../entities/Setting'
import { Users } from '../entities/User'

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: './database.sqlite',
  entities: [Settings, Users, Messages],
  migrations: [__dirname + '/migrations/*.ts'],
})
