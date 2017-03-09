/**
 * jQueryCache
 * @copyright 2017, Mirko Ferraro <mirkoferraro@gmail.com>
 * @link https://github.com/mirkoferraro/jquery-cache
 * @license MIT
 * @version 1.0.0
 */
(function(root, factory) {

  // AMD
  if (typeof define === "function" && define.amd) {
      define(["exports", "jquery"], function(exports, $) {
          return factory(exports, $);
      });
  }

  // CommonJS
  else if (typeof exports !== "undefined") {
      var $ = require("jquery");
      factory(exports, $);
  }

  // Browser
  else {
      factory(root, (root.jQuery || root.Zepto || root.ender || root.$));
  }

}(this, function(exports, $) {

    var
    lib   = window.jQuery || window.Zepto || window.ender || window.$,
    cache = {};

    function get(selector, requery) {
        if (typeof requery === 'undefined') {
            requery = false;
        }

        if (typeof cache[selector] === 'undefined' ||
            ( typeof requery !== 'undefined' && requery) ) {
            cache[selector] = lib(selector);
        }

        return cache[selector];
    }

    exports.$ = get;
    return get;
}));