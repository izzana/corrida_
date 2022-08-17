class Player {
  constructor() {
   
  }

  //método para obter o playerCount e updateCount() epara atualizar o playerCount no bd
  getCount() {
    //ler os dados e armazenar dentro da função
    var playerCountRef = database.ref('playerCount');//referenciando ao bd
    playerCountRef.on("value", (data) =>{//o V estava maiúsculo
      playerCount = data.val(); 
    });
  }
  
  //método para atualizar o playerCount no bd
  updateCount(count) {
    database.ref("/").update({
      playerCount: count
    });
  }
}
