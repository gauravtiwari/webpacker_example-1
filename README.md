# Usage

Run `rails s` & `ruby ./bin/webpack-dev-server` in separate terminal windows. Foreman does currently not work for me, so I have not added it.

You can switch between webpack/sprockets for javascript by commenting/uncommenting in `app/views/layouts/application.html.erb`.

Commenting out `import './../cable'` in `app/javascript/packs/application.js` confirms that the webpack is loading. -> console: `'Hello World from Webpacker'`

# Configuration

```
$ rails new webpacker_example --webpack

$ cd webpacker_example

# loading webpack from master + adding jquery-rails & jquery-ui-rails

$ bundle update

$ rails webpacker:install

$ rails g controller welcome index hello

# update routes.rb to use 'welcome#index' as root

# update app/assets/javascripts.application.js to require jquery & jquery-ui

# update app/javascript/packs/application.js to import rails-ujs & turbolinks & jquery & jquery-ui & './../cable'

# dublicate cable.js & channels dir from app/assets/javascripts to app/javascript

# update app/javascript/cable.js to import actioncable and the entire channels dir

$ yarn add rails-ujs turbolinks jquery jquery-ui actioncable

# update app/views/welcome/... to link to each other

# update app/views/layouts/application.html.erb to load javascript pack 'application'

$ rails assets:precompile

# try to add more packages with yarn. they will not work imported with webpack
```

# Issues

**1) Turbolinks not working**
-> links embedded in views

**2) jQuery not working**
-> Doing simple things like `$('body').hide();` throws an error.

**3) actioncable not working**
-> console errors
