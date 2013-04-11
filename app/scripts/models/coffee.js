// app/scripts/models/coffee.js

var app = app || {};

app.Coffee = Backbone.Model.extend({
    defaults: {
        name: 'single espresso',
        milk: 0,
        espresso: 1,
        syrup: 0,
        water: 0
    },
});