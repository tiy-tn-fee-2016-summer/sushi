import Ember from 'ember';

const sushiInfo = {
  width: 10,
  height: 7,
  image: 'sushi.jpg',
};

const dominionInfo = {
  width: 5,
  height: 2,
  image: 'dominion.jpg',
}

export default Ember.Component.extend({
  tagName: '',

  didReceiveAttrs() {
    if (this.get('game') === 'sushi') {
      this.set('imagePath', sushiInfo.image);
      this.computeStyle(sushiInfo);
    } else {
      this.set('imagePath', dominionInfo.image);
      this.computeStyle(dominionInfo);
    }
  },

  computeStyle(gameDetails) {
    const widthStyle = `width: calc(100% * ${gameDetails.width});`;
    const heightStyle = `height: calc(100% * ${gameDetails.height});`;
    this.set('imageStyle', `${widthStyle} ${heightStyle}`);
  },
});
