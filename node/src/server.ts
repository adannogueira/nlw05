import express from 'express'
import './database'
import 'reflect-metadata'
import { AppDataSource } from './database'
import { routes } from './routes'

const app = express()

AppDataSource.initialize()
app.use(express.json())
app.use(routes)

app.listen(3000, () => console.log('Server listening on port 3000!'))
