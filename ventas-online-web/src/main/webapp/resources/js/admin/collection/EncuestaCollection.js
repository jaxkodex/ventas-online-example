define(['backbone', 'model/Encuesta'], function (Backbone, Encuesta) {
    return Backbone.Collection.extend({
        model: Encuesta
    });
});
