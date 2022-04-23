import { http } from './app'
import './websocket/client'

http.listen(3000, () => console.log('Server listening on port 3000!'))
