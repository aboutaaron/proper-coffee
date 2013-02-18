// app/scripts/collections/cafe.js

var app = app || {};

app.Cafe = Backbone.Collection.extend({
    model: app.Coffee
});