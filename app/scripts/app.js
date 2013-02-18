'use strict';

var app = app || {};

$(function() {
    var coffees = [
        { name: 'double espresso', milk: 0, espresso: 2, other: 'none' },
        { name: 'macchiato', milk: 1, espresso: 2, other: 'none' },
        { name: 'cappuccino', milk: 3, espresso: 2, other: 'none' },
        { name: 'latte', milk: 4, espresso: 2, other: 'none' },
        { name: 'mocha', milk: 4, espresso: 2, other: 'Chocolate' }
    ];

    new app.CafeView(coffees)
});