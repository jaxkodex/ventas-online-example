require.config({
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        bootstrap: {
            deps: ['jquery'],
            exports: '$.fn.popover'
        },
        marionette: {
            deps: ['jquery', 'underscore', 'backbone'],
            exports: 'Marionette'
        },
        moment: {
            deps: ['jquery', 'bootstrap']
        }
    },
    paths: {
        jquery: '../jquery-1.11.3.min',
        underscore: '../underscore-min',
        backbone: '../backbone-min',
        bootstrap: '../bootstrap.min',
        marionette: '../lib/backbone.marionette',
        tpl: '../tpl',
        moment: '../moment'
    },
    urlArgs: "bust=" + (new Date()).getTime()
});

require(['app', 'backbone', 'view/AppLayout',
    'view/MenuView',
    'router/IndexRouter',
    'controller/IndexController'], function (app, Backbone,
                                             AppLayout, MenuView,
                                             IndexRouter,
                                             IndexController) {
    app.addInitializer(function () {
        app.rootView = new AppLayout;
        // inicialización de layout
        app.rootView.showChildView('menu', new MenuView);

        // inicialización de navegación
        new IndexRouter({controller: IndexController});
        Backbone.history.start();
    });
    app.start();
//    $(document).ajaxStart(function () {
//        $('.admin-modal').removeClass('hidden');
//        if ($("#loadingbar").length < 1) {
//            var div = $('<div>');
//            div.prop('id', 'loadingbar').appendTo('body').addClass(
//                    'waiting').append($("<dt/><dd/>")).css({
//                width: (50 + Math.random() * 30) + '%'
//            });
//        }
//    }).ajaxStop(function () {
//        $("#loadingbar").width("101%").delay(200).fadeOut(400, function () {
//            $(this).remove();
//        });
//        $('.admin-modal').addClass('hidden');
//    });
});