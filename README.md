# [jQuery Cache Plugin](https://github.com/mirkoferraro/jquery-cache)

A plugin for jQuery that provides cache for selectors

## Why
How many times did you see this?
```
$('.my-class').removeClass('another-class')
$('.my-class').show()
$('.my-class').css('top', '15px')
$('.my-class').data('content', content)
```
I saw this many times... and yes, my eyes are tired...
This is a very very horrible code... because jQuery performes a search for each ```$()``` you write.

The right way to write this code is:
```
$('.my-class')
    .removeClass('another-class')
    .show()
    .css('top', '15px')
    .data('content', content)
    ...
```

When the going gets tough:
```
$myclass = $('.my-class')
...
$myclass.removeClass('another-class')
...
$myclass.show()
...
$myclass.css('top', '15px')
...
$myclass.data('content', content)
```

But if you need to quickly repair a bad code without change it and improve your application' performance you can include this 483 bytes library.

You don't need to change your code.

## Compatibility
jQuery Cache is also compatible with Zepto and Ender.

This plugin is written in order to be included as raw js or node module.

## Installation
```
npm install jquery-cache
```