$(document).ready(function(){
    var supers = {
    
    iron :{
        img: $("#iron").html(),
        attack: 200,
        defense: 200,
        counter: 200,
    },

    spider :{
        img: $("#spider").html(),
        attack: 200,
        defense: 200,
        counter: 200,
    },

    flash :{
        img: $("#flash").html(),
        attack: 200,
        defense: 200,
        counter: 200,
    },

    supergirl :{
        img: $("#supergirl").html(),
        attack: 200,
        defense: 200,
        counter: 200,
    }
    };

    var user;
    var enemy;
    var step = 1;

    console.log("test" +supers.iron.img)

    // Step 1 
        if(step == 0){ 

            // If Iron Man selected
            $("#iron").click(function(){
                setUser(this);
                $("#spiderE").slideDown("slow");
                $("#flashE").slideDown("slow");
                $("#supergirlE").slideDown("slow");
                $("#spider").slideUp("slow");
                $("#flash").slideUp("slow");
                $("#supergirl").slideUp("slow");
            });

            // If Spiderman selected
            $("#spider").click(function(){
                setUser(this);
                $("#ironE").slideDown("slow");
                $("#flashE").slideDown("slow");
                $("#supergirlE").slideDown("slow");
                $("#iron").slideUp("slow");
                $("#flash").slideUp("slow");
                $("#supergirl").slideUp("slow");
            });

            // If Flash selected
            $("#flash").click(function(){
                setUser(this);
                $("#spiderE").slideDown("slow");
                $("#ironE").slideDown("slow");
                $("#supergirlE").slideDown("slow");
                $("#spider").slideUp("slow");
                $("#iron").slideUp("slow");
                $("#supergirl").slideUp("slow");
            });

            // If Supergirl selected
            $("#supergirl").click(function(){
                setUser(this);
                $("#spiderE").slideDown("slow");
                $("#flashE").slideDown("slow");
                $("#ironE").slideDown("slow");
                $("#spider").slideUp("slow");
                $("#flash").slideUp("slow");
                $("#iron").slideUp("slow");
            });

            // Step 2
        } 
        
        if (step==1){
                        // If Iron Man selected
                        $("#iron").click(function(){
                            setEnemy(this);
                        });
            
                        // If Spiderman selected
                        $("#spider").click(function(){
                            setEnemy(this);
                            console.log ("test");
                        });
            
                        // If Flash selected
                        $("#flash").click(function(){
                            setEnemy(this);
                        });
            
                        // If Supergirl selected
                        $("#supergirl").click(function(){
                            setEnemy(this);
                    });
                };

     function reset(){

     }

     function setUser(hero){
        console.log(hero);
        $("#user").html(hero);
        step++;
        console.log(step);

     }

     function setEnemy(hero){
        console.log(hero);
        $("#enemy").html(hero);
        step++;
     }

});