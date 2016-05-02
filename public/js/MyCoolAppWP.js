define("app",['jquery', 'backbone','js/views/PrimaryViewWP', 'css/main.scss'], function($, Backbone, MainView){
        return {
                start:function(){
                        console.log("started");
                        var view = new MainView();
                        view.render({
                                products: [        
                                        {title:"Dyson cleaner", img:"/images/dyson.jpg"},
                                        {title:"Polo Ralph Lauren Men's Slaton Polo Tech Expedition", img:"/images/shoes.jpg"},
                                        {title:"New Balance Men's 574 Casual Sneakers from Finish Line", img:"/images/newbalance.jpg"}
                                ] 
                        });
                }
        }
});


require("app").start();
