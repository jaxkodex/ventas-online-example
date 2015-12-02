define(['marionette', 
        'tpl!templates/html/configuracion-atencion.tpl',
        'collection/AtencionCollection',
        'model/AtencionModel'], function (Marionette, 
        		ConfiguraciontencionFormTemplate,
        		AtencionCollection,
        		AtencionModel
        		) {
	var atenciones = new AtencionCollection;
	
	return Marionette.LayoutView.extend({
		initialize: function (options) {
			var options = options || {}, me=this;
			
			if (typeof options.collection != 'undefined') {
				this.collection = options.collection;
			}
		
			
//					
//			this.listenTo(this.model, 'change', this.render);
//			this.listenTo(this.model, 'invalid', this.render);
				
		},
		
		template: ConfiguraciontencionFormTemplate,
		events: {
			'click #siguiente': 'comenzarEncuesta',
		},
		modelEvents: {
			'invalid': 'onInvalidModel'
		},
		comenzarEncuesta: function (evt) {
			evt.preventDefault();
			console.log("Comenzando encuenstra")
			var me=this;
			me.trigger('go:showatencionencuesta');
		},
		onInvalidModel: function (model, errors) {
			this.$('.form-group').removeClass('has-warning');
			this.$('.help-block').remove();
			_.each(errors, function (val) {
				var parentEl = this.$('#'+val.attribute).parent();
				parentEl.addClass('has-warning');
				parentEl.append($('<div>').addClass('help-block').text(val.error));
			});
		},

	});
	
});