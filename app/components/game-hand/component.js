import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',
  game: 'dominion',

  actions: {
    changeGame() {
      if (this.game === 'dominion') {
        this.set('game', 'sushi');
      } else {
        this.set('game', 'dominion');
      }
    }
  }
});
