class Game{
    constructor(){

    }

    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function(data){
            gameState = data.val();
        })
    }

    update(state){
        database.ref('/').update({
            'gameState': state
        });
    }

   async start(){
        if(gameState === 0){
            player = new Player();

            var playerCountRef = await database.ref('playerCount').once("value");
            if(playerCountRef.exists()){
                playerCount = playerCountRef.val();

                player.getCount();

            }
            
            form = new Form();
            form.display();
        }
        fighter1 = createSprite(200,300);
        fighter1.addAnimation("f1",fg1Img);

        fighter2 = createSprite(600,300);
        fighter2.addAnimation("f2",fg2Img);

        fighters = [fighter1,fighter2];

         }

    play(){
        form.hide();

        Player.getPlayerInfo();

        if(allPlayers != undefined){
        background(backgroundImg);  

        var index = 0;
        var y = 300
        
        var x;

        for(var plr in allPlayers){
            index = index + 1;

            x = displayWidth-allPlayers[plr].distance;
            fighters[index-1].x = x;
            fighters[index-1].y = y;

            if(index = player.index){
                fill("red"); 
                ellipse(x,y,50,50);
        
            }
        }

           
        }
       
        

        if(keyIsDown(RIGHT_ARROW) && player.index != null){
          
            player.distance += 5;
            player.update();
            
        }

        drawSprites();

    }

}