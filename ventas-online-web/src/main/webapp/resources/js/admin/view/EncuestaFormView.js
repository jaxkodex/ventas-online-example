define(['marionette', 'tpl!templates/EncuestaForm.html'], function (Marionette, encuestaFormTemplate) {
    return Marionette.ItemView.extend({
        template: encuestaFormTemplate
    });
});