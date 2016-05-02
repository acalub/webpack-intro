define(["jquery", "backbone", "templates/mainView.hbs"], function($, Backbone, template){
      //  Handlebars.registerHelper("myHelper", myHelper);
       // Handlebars.registerPartial("sample", partial);
        
        return Backbone.View.extend({
                el:"section",
                template:template,
                initialize: function(opt){
                        console.log("intialize");
                },
                render: function(obj){
                        this.$el.html(this.template(obj));
                }
        });
});

