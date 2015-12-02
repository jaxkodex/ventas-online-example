define(['backbone', 'model/AtencionModel'], function (Backbone, AtencionModel) {
	var AtencionCollection = Backbone.Collection.extend({
		url: baseUrl+'/atencion',
		model: AtencionModel
	});	
	return AtencionCollection;
});