'use strict';

var app = app || {};

$(function() {
    var coffees = [
        { name: 'double espresso', milk: 0, espresso: 20, extra: 0 },
        { name: 'macchiato', milk: 10, espresso: 20, extra: 0 },
        { name: 'cappuccino', milk: 30, espresso: 20, extra: 0 },
        { name: 'americano', milk: 0, espresso: 20, extra: 30 },
        { name: 'latte', milk: 40, espresso: 20, extra: 0 },
        { name: 'mocha', milk: 40, espresso: 20, extra: 10 }
    ];

    new app.CafeView(coffees)
});