define(['marionette', 'tpl!templates/Menu.html'], function (Marionette, menuTemplate) {
    return Marionette.ItemView.extend({
        template: menuTemplate
    });
});