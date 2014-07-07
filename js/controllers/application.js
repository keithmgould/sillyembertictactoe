Tictactoe.ApplicationController = Ember.ObjectController.extend({
  actions: {
    newGame: function () {
      console.log('yay actions!');
      $('#board').show();
    },

    cellClick: function (foobar) {
      console.log('cell clicked!');
    }
  }
});
