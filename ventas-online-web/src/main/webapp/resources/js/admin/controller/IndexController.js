define(['model/Encuesta', 'collection/EncuestaCollection', 'view/EncuestaListView', 'view/EncuestaFormView', 'app', 'backbone'],
    function (Encuesta, EncuestaCollection, EncuestaListView, EncuestaFormView, app, Backbone) {
        var encuestaCollection = new EncuestaCollection([]);
        return {
            index: function () {
                console.log('hello from index');
            },
            showEncuestaList: function () {
                console.log('aaa');
                var view, me;
                me = this;
                view = new EncuestaListView({
                    collection: encuestaCollection
                });
                view.on('goto:nuevaEncuesta', function () {
                    me.showEncuestaFormNew();
                    Backbone.history.navigate('encuestas/new')
                });
                app.rootView.showChildView('main', view);
//                app.rootView.getRegion('main').empty().show(view);
            },
            showEncuestaFormNew: function () {
                var view, me, model;
                me = this;
                encuesta = new Encuesta;
                encuestaCollection.add(encuesta);
                view = new EncuestaFormView({
                    model: encuesta
                });
                app.rootView.showChildView('main', view);
            },
            showEncuestaFormEdit: function (id) {
                console.log('show encuesta edit form ' + id);
            }
        }
    });
