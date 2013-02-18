// app/scripts/views/coffee.js

var app = app || {};

app.CoffeeView = Backbone.View.extend({
    tagName: 'section',
    className: 'coffee-container span4',
    template: $('#coffee-template').html(),

    render: function() {
        var tmpl = _.template(this.template);

        this.$el.html(tmpl(this.model.toJSON()));

        return this;
    }
});