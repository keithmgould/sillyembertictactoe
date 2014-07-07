Tictactoe.Router.map(function() {
  this.resource('application', { path: '/' });
});

Tictactoe.ApplicationRoute = Ember.Route.extend({
  model: function () {
    return Tictactoe.Game.create();
  }
});
