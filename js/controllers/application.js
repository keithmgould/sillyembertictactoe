Tictactoe.ApplicationController = Ember.ObjectController.extend({
  actions: {
    newGame: function () {
      daBoard = this.get('content');
      daBoard.resetBoard();
    },

    cellClick: function(cell) {
      daBoard = this.get('content');

      // if we already have a winner, leave.
      if(daBoard.get('winner') != null) { return; }
      results = cell.occupy(daBoard.get('whoseMove'));
      daBoard.determineWinner();

      // if we have a new winner, don't swap sides
      if(daBoard.get('winner') != null) { return; }
      if(results) { daBoard.swapSides(); }
    }
  }
});
