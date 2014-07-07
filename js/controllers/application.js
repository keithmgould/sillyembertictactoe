Tictactoe.ApplicationController = Ember.ObjectController.extend({
  actions: {
    newGame: function () {
      daBoard = this.get('content');
      daBoard.resetBoard();
    },

    cellClick: function(cell) {
      daBoard = this.get('content');
      if(daBoard.winner != null) { return; } 
      results = cell.occupy(daBoard.get('whoseMove'));
      daBoard.determineWinner();
      if(daBoard.get('winner') != null) {
        console.log('winner found!');
        return;
      }
      if(results) { daBoard.swapSides(); }
    }
  }
});
