define(['underscore', 'marionette', 'tpl!templates/EncuestaList.html'],
    function (_, Marionette, encuestaListTemplate) {
        var rowView = Marionette.ItemView.extend({
            tagName: 'tr',
            template: _.template('<td></td><td></td>')
        });

        return Marionette.CompositeView.extend({
            template: encuestaListTemplate,
            childViewContainer: 'tbody',
            childView: rowView,
            events: {
                'click #nueva-encuesta': 'nuevaEncuesta'
            },
            nuevaEncuesta: function () {
                this.trigger('goto:nuevaEncuesta');
            }
        });
    });
