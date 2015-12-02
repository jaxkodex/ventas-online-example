define(['router/AdminBaseRouter'], function(AdminBaseRouter) {
    return AdminBaseRouter.extend({
        appRoutes: {
        	'configuracion-atencion': 'showConfiguracionAtencion',
            'atencion-encuesta': 'showAtencionEncuesta',
            'pregunta-encuesta': 'showPreguntaEncuesta'
//            'controlperiodos/facturacion': 'showFacturacionView',
//            'controlperiodos/planilla': 'showPlanillaView',
//            'controlperiodos/newperiodo':'showNewPeriodo',
//            'controlperiodos/edit': 'showEditPeriodo',
           
        }
    });
});