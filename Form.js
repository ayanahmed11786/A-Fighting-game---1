class Form{
    constructor(){
        this.reset = createButton('Reset');
        this.greeting = createElement('h3');
        this.button = createButton('PLAY');
        this.input = createInput("NAME");
        this.title = createElement('h2');

    }

    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
      }

    display(){
        
        this.title.html("FIGHTING GAME");
        this.title.position(130,10);

        
        this.input.position(300,160);

        
        this.button.position(300,200);

        

        this.reset.position(700,300);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();

            var name = this.input.value();

            playerCount += 1;

            player.update(name);

            player.updateCount(playerCount);

            this.greeting.html("HELLO  " + name);
            this.greeting.position(330,160);
        })

        this.reset.mousePressed(()=>{
            player.updateCount(0);
            game.update(0);
        })

    }
}