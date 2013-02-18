// app/scripts/models/coffee.js

var app = app || {};

app.Coffee = Backbone.Model.extend({
    defaults: {
        name: 'No drink',
        espresso: 0,
        milk: 0,
        other: "None"
    },
});