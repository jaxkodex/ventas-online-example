define(['marionette'], function (Marionette) {
    return Marionette.AppRouter.extend({
        appRoutes: {
            '': 'index',
            'encuestas/': 'showEncuestaList',
            'encuestas/new': 'showEncuestaFormNew',
            'encuestas/edit/:id': 'showEncuestaFormEdit'
        }
    });
});
