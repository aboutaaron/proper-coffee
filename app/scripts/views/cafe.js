// app/scripts/views/cafe.js

var app = app || {};

app.CafeView = Backbone.View.extend({
    el: $('#coffee'),

    initialize: function(initialCoffees) {
        this.collection = new app.Cafe(initialCoffees);
        this.render();
    },

    render: function() {
        _.each(this.collection.models, function(item) {
            this.renderCoffee(item);
        }, this);
    },

    renderCoffee: function(item) {
        var coffeeView = new app.CoffeeView({
            model: item
        });
        this.$el.append(coffeeView.render().el);
    }
});