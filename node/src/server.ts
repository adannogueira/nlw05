import { http } from './app'
import 'reflect-metadata'
import './websocket/client'
import './websocket/admin'

http.listen(3000, () => console.log('Server listening on port 3000!'))
