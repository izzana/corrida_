class Game {
  constructor() {}

  getState() {//método que irá ler o gameState do banco de dados
      var gameStateRef = database.ref("gameState");//me referindo a chave gameState criada no bd
      //criando um ouvinte que fica acompanhando a mudança no valor da variável gameState no bd.
      gameStateRef.on("value", function(data) {        
        gameState = data.val();
    });
  }

  update(state) {//método que irá atualizar o gameState no bd para um valor passado para ele como parâmetro
    database.ref("/").update({//se refere ao banco de dados principal dentro do qual gameState é criado
      gameState: state
    })

  }
  start() {//método para obter o gameState e então iniciar o jogo
    //instância de um novo jogador
    player = new Player();
    //inciando a variável playerCount
    playerCount =  player.getCount();

    form = new Form();
    playerCount = player.getCount();

    form = new Form();
    form.display();

    //criar sprites dos jogadores
    car1 = createSprite(width/2 - 50, height - 100)
    car1.addImage("car1", car1_img);
    car1.scale = 0.07

    //atribuindo os objetos ao vetor cars
    car2 = createSprite(width/2 + 100, height - 100)
    car2.addImage("car2", car2_img);
    car2.scale = 0.07
  }
  
  handleElements(){
    form.hide();
    form.titleImg.position(40,50);
    form.titleImg.class("gameTitleAfterEffects");
  }

  play() {
    //função para esconder os elementos
    this.handleElements();
    //desenhar os sprites
    drawSprites()
  }

}
