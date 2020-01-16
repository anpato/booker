import Server from './Server'
import middleWare from './config/ServerConfig'
import { PORT } from './env'

const app = new Server(PORT, middleWare, '/')
const app2 = new Server(52000, middleWare, '/v2')
app.initialize()
app2.initialize()
