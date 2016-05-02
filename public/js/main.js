require.config({
    baseUrl: "/",
	paths:{
		"backbone":"libs/backbone-min",
                "handlebars.runtime":"libs/handlebars.runtime.amd.min",
		"jquery":"libs/jquery-1.12.2.min",
		"underscore":"libs/underscore-min",
                "moment":"libs/moment.min",
		"app":"js/MyCoolApp"
	}
});

require(['app'], function(App){
        App.start();
});
