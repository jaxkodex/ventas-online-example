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
		moment:{
			deps: ['jquery', 'bootstrap']
		}
	},
	paths: {
		jquery: '../jquery-1.11.3.min',
		underscore: '../underscore-min',
		backbone: '../backbone-min',
		bootstrap: '../bootstrap.min',
		marionette: '../backbone.marionette.min',
		tpl: '../tpl',
		moment:'../moment'
	},
	urlArgs: "bust=" + (new Date()).getTime()
});

require(['admin-app', 'backbone',
         'view/menu','view/topbar',
         'router/AdminSeguridadRouter','router/EncuestaRouter',         
         'controller/EncuestaController',         
         'model/SessionModel','model/AtencionModel',
         'collection/SessionCollection','collection/AtencionCollection'],
         function (app, Backbone,
        		 menuView,topbarView,
        		 AdminSeguridadRouter,EncuestaRouter,        		 
        		 encuestaController,        		 
        		 SessionModel,AtencionModel,
        		 SessionCollection,AtencionCollection
        		 ) {
	var sessionCollection = new SessionCollection;
	app.addInitializer(function () {
		//app.userModel = new UsuarioModel (userData);
		app.topbar.show(new topbarView({
			//model: app.userModel
		}));	
		
		$('#loading-placeholder').animate({
			'opacity': '0'
		}, {
			complete: function () {
				app.menu.show(new menuView);
				$('#loading-placeholder').addClass('hidden');
				$('#workspace').removeClass('hidden').animate({
					'opacity': '1'
				}, {});
			}
		});
		
		//Initialize all routers here
		new EncuestaRouter({controller: encuestaController});

		Backbone.history.start();
	});
	app.start();
//	sessionCollection.fetch({
//		silent: true,
//		success: function () {
//			console.log("success");
//			app.start();
//			
//		},
//		error:function(){
//			//app.start();
//			app.start();
//			console.log("sads");
//		}
//	});
//	

	$(document).ajaxStart(function() {
		$('.admin-modal').removeClass('hidden');
		if ($("#loadingbar").length < 1) {
			var div = $('<div>');
			div.prop('id', 'loadingbar').appendTo('body').addClass(
					'waiting').append($("<dt/><dd/>")).css({
				width : (50 + Math.random() * 30) + '%'
			});
		}
	}).ajaxStop(function() {
		$("#loadingbar").width("101%").delay(200).fadeOut(400, function() {
			$(this).remove();
		});
		$('.admin-modal').addClass('hidden');
	});
});