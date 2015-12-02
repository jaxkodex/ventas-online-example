define(['underscore', 'backbone'], function (_, Backbone) {
	return Backbone.Model.extend({
		idAttribute: 'idAtencion',
		defaults: {
			idAtencion:null,
			nuMesa:'',
			ectmColaborador:{
				idColaborador:'',
				idPersona:''
			},
			ectmArea:{
				idArea:''
			},
		}
	});
});