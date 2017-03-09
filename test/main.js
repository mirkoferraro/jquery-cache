window.$ = window.jQuery = require('jquery')
window.$$ = require('../dist/jquery-cache.min')

$$('body').append('<p>Text printed with jQuery Cache Plugin</p>')