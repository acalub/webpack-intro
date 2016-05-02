/*define(['handlebars.runtime'], function(Handlebars){
        return function(args, options){
                console.log("myHelper called");
                return new Handlebars.SafeString("<h5>" + args + "</h5>");
        };
});*/

var Handlebars = require("handlebars");
module.exports = function(args, options){
        return new Handlebars.SafeString("<h5>" + args + "</h5>");
};

