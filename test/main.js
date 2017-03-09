window.$ = window.jQuery = require('jquery')
window.$ = window.$$ = require('../dist/jquery-cache.min') //Rewrite the $

$('body').append('<p>Text printed with jQuery Cache Plugin</p>')