'use strict';

var app = app || {};

$(function() {
    // Total sum can't exceed 7
    var coffees = [
        { name: 'double espresso', milk: 0, espresso: 2, syrup: 0, water: 0 },
        { name: 'macchiato', milk: 1, espresso: 2, syrup: 0, water: 0 },
        { name: 'cappuccino', milk: 3, espresso: 2, syrup: 0, water: 0 },
        { name: 'americano', milk: 0, espresso: 2, syrup: 0, water: 3 },
        { name: 'latte', milk: 5, espresso: 2, syrup: 0, water: 0 },
        { name: 'mocha', milk: 4, espresso: 2, syrup: 1, water: 0 },
        { name: 'special drink', milk: 3.5, espresso: 0, syrup: 3.5, water: 0 },
        { name: 'cho bro', milk: 1, espresso: 2, syrup: 1, water: 0 },
        { name: 'devito', milk: 0, espresso: 2, syrup: 0, water: 1.5 }
    ];

    new app.CafeView(coffees)
});