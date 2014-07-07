Tictactoe.Board = Ember.Object.extend({
  init: function() {
    this.set('cells', [
      [Tictactoe.Cell.create(), Tictactoe.Cell.create(), Tictactoe.Cell.create()],
      [Tictactoe.Cell.create(), Tictactoe.Cell.create(), Tictactoe.Cell.create()],
      [Tictactoe.Cell.create(), Tictactoe.Cell.create(), Tictactoe.Cell.create()]
    ]);
    this.resetBoard();
  },

  swapSides: function() {
    if(this.get('whoseMove') == 'X'){
      this.set('whoseMove', 'O');
    }else{
      this.set('whoseMove', 'X');
    }
  },

  resetBoard: function() {
    this.set('whoseMove', 'X');
    this.set('winner', null);
    that = this;
    $.each([0,1,2], function(index, row) {
      $.each([0,1,2], function(index, column) {
        that.cells[row][column].set('state', 'isEmpty');
      });
    });
  },

  determineWinner: function() {
    that = this;
    winnerFound = null;

    // first look for row and column wins
    $.each([0,1,2], function (index, row) {
      rowSum = 0;
      columnSum = 0;
      $.each([0,1,2], function (index, column) {
        if(that.cells[row][column].state == 'isX'){
          rowSum  = rowSum + 1;
        }else if(that.cells[row][column].state == 'isO'){
          rowSum = rowSum - 1;
        }
        // switch variables around to look at columns:
        if(that.cells[column][row].state == 'isX'){
          columnSum  = columnSum + 1;
        }else if(that.cells[column][row].state == 'isO'){
          columnSum = columnSum - 1;
        }

      });
      if(rowSum == 3 || columnSum == 3){
        that.set('winner', 'X');
      }else if(rowSum == -3 || columnSum == -3){
        that.set('winner', 'O');
      }
    });

    // now look for diags
    diagDownSum = 0;
    $.each([[0,0],[1,1],[2,2]], function (index, pair) {
      if(that.cells[pair[0]][pair[1]].state == 'isX'){
        diagDownSum = diagDownSum + 1;
      }else if(that.cells[pair[0]][pair[1]].state == 'isO'){
        diagDownSum = diagDownSum - 1;
      }
    });

    diagUpSum = 0;
    $.each([[2,0],[1,1],[0,2]], function (index, pair) {
      if(that.cells[pair[0]][pair[1]].state == 'isX'){
        diagUpSum = diagUpSum + 1;
      }else if(that.cells[pair[0]][pair[1]].state == 'isO'){
        diagUpSum = diagUpSum - 1;
      }
    });

    if( diagDownSum == 3  || diagUpSum == 3){  that.set('winner','X'); }
    if( diagDownSum == -3 || diagUpSum == -3){ that.set('winner','O'); }
  }

});
