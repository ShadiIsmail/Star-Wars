new Vue({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false
  },
  methods: {
    startGame: function(){
      this.gameIsRunning = true;
      this.playerHealth = 100;
      this.darthVader = 100;
    },
    attack: function(){
      // setting the user attack
      var max = 10;
      var min = 3;
      var damage = Math.max(Math.floor(Math.random() * max) + 1, min)
      this.darthVader -= damage;
      //check is player won
      if (this.darthVader <= 0) {
        alert('You Won!');
        this.gameIsRunning = false;
        return;
      }
      // setting the Darth Vader attack to deal more damage
      max = 12;
      min = 5;
      damage = Math.max(Math.floor(Math.random() *  max) + 1, min)
      this.playerHealth -= damage;
      //Check is Darth Vader won
      if (this.playerHealth <= 0) {
        alert('You Lost !');
        this.gameIsRunning = false;
      }
    },
  }
});
