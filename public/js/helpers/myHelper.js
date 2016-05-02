define(['handlebars.runtime'], function(Handlebars){
        return function(args, options){
                console.log("myHelper called");
                return new Handlebars.SafeString("<h5>" + args + "</h5>");
        };
});
