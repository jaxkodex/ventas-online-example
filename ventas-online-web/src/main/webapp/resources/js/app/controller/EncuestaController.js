define(['admin-app',
        'collection/AtencionCollection',
        'model/AtencionModel',
        'view/AtencionFormView', 'view/ConfiguracionAtencionFormView'],
        function (app,
        		AtencionCollection,
        		AtencionModel,
        		AtencionFormView, ConfiguracionAtencionFormView
        		) {
	
	var atencionCollection = new AtencionCollection;	
	return {		
		
		showConfiguracionAtencion: function () {
			var me=this;
									
						var view = new ConfiguracionAtencionFormView({
							collection: atencionCollection
						});
						view.on('go:showatencionencuesta', function () {
							me.showAtencionEncuesta();
							Backbone.history.navigate('#atencion-encuesta');
						});
						
						app.main.show(view);
				

		},
		
		showAtencionEncuesta: function () {
			var me=this;
									
						var view = new AtencionFormView({
							collection: atencionCollection
						});
						view.on('go:showpreguntaencuesta', function () {
							me.showPreguntaEncuesta(id);
							Backbone.history.navigate('#pregunta-encuesta');
						});
						
						app.main.show(view);
				

		},
		showPreguntaEncuesta: function (id) {
			
		},
		 showMenu: function () {
				app.main.show(view);
				
		}
	};
});