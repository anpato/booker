import Pusher from 'pusher-js/react-native'
import {
  PUSHER_APP_ID,
  PUSHER_KEY,
  PUSHER_SECRET,
  PUSHER_CLUSTER
} from 'react-native-dotenv'

export const pusher = new Pusher(PUSHER_KEY, {
  cluster: PUSHER_CLUSTER,
  forceTLS: true
})
