Tictactoe.Cell = Ember.Object.extend({
  state: 'isEmpty',
  occupy: function(whoseMove) {
    if(this.get('state') == 'isEmpty'){
      if(whoseMove == 'X'){
        this.set('state', 'isX');
      }else{
        this.set('state', 'isO');
      }
      return true;
    }else{
      return false;
    }
  }
});
