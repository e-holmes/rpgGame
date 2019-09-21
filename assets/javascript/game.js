$(document).ready(function(){
    var supers = {
    
    iron :{
        img: $("#iron").html(),
        attack: rndNum(2, 9),
        defense: rndNum(150, 350),
        counter: rndNum(5,25),
    },

    spider :{
        img: $("#spider").html(),
        attack: rndNum(2, 9),
        defense: rndNum(150, 350),
        counter: rndNum(5,25),
    },

    flash :{
        img: $("#flash").html(),
        attack: rndNum(2, 9),
        defense: rndNum(150, 350),
        counter: rndNum(5, 25),
    },

    supergirl :{
        img: $("#supergirl").html(),
        attack: rndNum(2, 9),
        defense: rndNum(150, 350),
        counter: rndNum(5, 25),
    }
    };
    var mul=0;
    var user;
    var userA;
    var enemy;
    var enemyA;
    var step = 0;
    var defeated=[];


    start();

    $(".button").on("click", function(){
        console.log("Steps: " +step);
        
    // Step 1-Choose Hero
        if(step === 0){ 
            console.log("this: " +this);

            //FETCH USER CHOICE
            user = this.id;
            // secondNumber += $(this).id();
            console.log("user: " +user);

            // If Iron Man selected
            if(user==="iron"){
                setUser(this);
                userA=supers.iron;
                $("#spiderE").slideDown("slow");
                $("#flashE").slideDown("slow");
                $("#supergirlE").slideDown("slow");
                $("#spider").slideUp("slow");
                $("#flash").slideUp("slow");
                $("#supergirl").slideUp("slow");
            }
            // If Spiderman selected
                else if (user === "spider"){
                setUser(this);
                userA=supers.spider;
                $("#ironE").slideDown("slow");
                $("#flashE").slideDown("slow");
                $("#supergirlE").slideDown("slow");
                $("#iron").slideUp("slow");
                $("#flash").slideUp("slow");
                $("#supergirl").slideUp("slow");
            }
            // If Flash selected
                else if (user === "flash"){
                    setUser(this);
                    userA=supers.flash;
                    $("#spiderE").slideDown("slow");
                    $("#ironE").slideDown("slow");
                    $("#supergirlE").slideDown("slow");
                    $("#spider").slideUp("slow");
                    $("#iron").slideUp("slow");
                    $("#supergirl").slideUp("slow");
            }
            // If Supergirl selected
                else if (user === "supergirl"){
                    setUser(this);
                    userA=supers.supergirl;
                    $("#spiderE").slideDown("slow");
                    $("#flashE").slideDown("slow");
                    $("#ironE").slideDown("slow");
                    $("#spider").slideUp("slow");
                    $("#flash").slideUp("slow");
                    $("#iron").slideUp("slow");
                };
            }

        // Step 2 Choose Enemy
        else if (step===1){
            
            enemy = this.id;
            console.log(enemy);

            // If Iron Man selected
                if(enemy==="ironE"){
                    setEnemy(this);
                    enemyA=supers.iron;
                }
            // If Spiderman selected
                else if(enemy === "spiderE"){
                    setEnemy(this);
                    enemyA=supers.spider;
                }
        
            // If Flash selected
                else if(enemy ==="flashE"){
                    setEnemy(this);
                    enemyA=supers.flash;
                }
        
            // If Supergirl selected
                else if(enemy==="supergirlE"){
                    setEnemy(this);
                    enemyA=supers.supergirl;
                } 
            // If attack selected
                else if (enemy === "attack" && step===1){
                    pReset();
                    $("#p1").append("No enemy selected!");
                };
        }

        // Step 3 Attack Phase
            else if(step===2){
                attack();
            }

        // Step Reset
            else if(step===3){
                $("#reset").show();
                reset();
            };

    });

        
// FUNCTIONS

    function start(){
        $("#ironH").text("Health: " +supers.iron.defense);
        $("#spiderH").text("Health: " +supers.spider.defense);
        $("#flashH").text("Health: " +supers.flash.defense);
        $("#supergirlH").text("Health: " +supers.supergirl.defense);
    };


     function reset(){
     mul=0;
     user;
     userA;
     enemy;
     enemyA;
     step = 0;
     defeated=[];
     $("#user").empty();
     location.reload();
     };

     function attack(){
        if(mul===0){ 
            mul = userA.attack;
            console.log("Multiplier: " +mul);
            attackSteps();    
        } else{
            attackSteps();
         };
     };

     function attackSteps(){
        console.log("Enemy Defense: " +enemyA.defense);
        console.log("Enemy Counter: " +enemyA.counter);
        console.log("User Attack: " +userA.attack);
        console.log("User Defense: " +userA.defense);
        // Damage enemy health
         enemyA.defense=enemyA.defense-userA.attack;
        //  Increase user attack power
         userA.attack=userA.attack+mul;
        //  Damage user health
         userA.defense=userA.defense-enemyA.counter;
        console.log("Enemy Defense Updated: " +enemyA.defense);
        console.log("User Attack Updated: " +userA.attack);
        console.log("User Defense Updated: " +userA.defense);

        if(enemyA.defense <= 0){
            if(defeated.length !== 2){
            console.log("stop");
            $("#enemy").empty();
            defeated.push(enemy);
            pReset();
            $("#p1").append("You defeated your opponent!")
            $("#p2").append("Select a new opponent!")
            step=1;
            }else{
                $("#enemy").empty();
                pReset();
                $("#p1").append("You won!")
                $("#reset").show();
                step++;
            }
        }else if(userA.defense <= 0){
            console.log("stop");
            $("#user").empty();
            pReset();
            $("#p1").append("You were defeated!")
            $("#reset").show();
                step++;
            
        }else{
            pReset();
            $("#p1").append("You dealt your opponent " +userA.attack +" damage.")
            $("#p2").append("Your opponent dealt you " +enemyA.counter +" damage.")
        }
     };

    //  Empties log
     function pReset(){
        $("#p1").empty();
        $("#p2").empty();
     }

     function setUser(hero){
        console.log(hero);
        $("#user").html(hero);
        step++;
        console.log(step);
     };

     function setEnemy(bad){
        console.log(bad);
        $("#enemy").html(bad);
        step++;
        console.log(step);
        pReset();
     };

     function rndNum(min, max){
        return Math.floor(Math.random() * (max - min + 1) ) + min;
     };

});