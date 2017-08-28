/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

import 'rails-ujs'
import * as Turbolinks from 'turbolinks'
import * as $ from 'jquery'
import 'jquery-ui/ui/widgets/draggable'
import WS from '../cable'

// Start turbolinks
Turbolinks.start()

// Some action cable demo
WS.echo = WS.consumer.subscriptions.create('EchoChannel', {
  connected: () => console.log('Actioncable connected'),
  disconnected: () => console.log('Actioncable disconnected'),
  received: (data) => console.log('Actioncable data recieved', data)
});

// message node will hide in 2s
setTimeout(() => $('#message').hide(), 2000)

// Some jquery-ui demo
document.addEventListener('DOMContentLoaded', () => $('#draggable').draggable())

// Log some messgae
console.log('Hello World from Webpacker')
