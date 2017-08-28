// Action Cable provides the framework to deal with WebSockets in Rails.
// You can generate new channels where WebSocket features live using the `rails generate channel` command.

import * as ActionCable from 'actioncable'

const requireAll = (r) => r.keys().forEach(r)

requireAll(require.context('./channels/', true, /\.js$/));

// A simple class to create an action cable consumer
class WS {
  static consumer = ActionCable.createConsumer()
}

window.WS = WS
export default WS
