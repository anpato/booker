import Server from './Server'
import middleWare from './config/ServerConfig'
import { PORT } from './env'

const app = new Server(PORT, middleWare, '/')
const app2 = new Server(PORT, middleWare, '/')
app.initialize()
app2.initialize()
