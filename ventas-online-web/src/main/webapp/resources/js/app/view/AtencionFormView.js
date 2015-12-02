define(['marionette', 
        'tpl!templates/html/atencion-encuesta-form.tpl',
        'collection/AtencionCollection',
        'model/AtencionModel'], function (Marionette, 
        		atencionFormTemplate,
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
		
		template: atencionFormTemplate,
		events: {
	//		'click .cancel': 'cancelar',
		},
		modelEvents: {
			'invalid': 'onInvalidModel'
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