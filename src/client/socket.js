import io from 'socket.io-client'
import ioSs from 'socket.io-stream'

import {
  WEB_HOST,
  WEB_PORT,
} from '../shared/config'

export const socket = io.connect(`http://${WEB_HOST}:${WEB_PORT}`)
export const ss = ioSs
