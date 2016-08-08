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
    // Start with 0... Because Math!
    const index = this.get('cardNumber') - 1;
    // Remainder of the width should give us the column we are in
    const leftOffset = index % gameDetails.width;
    // Division and rounding down gives us the row we're in
    const topOffset = Math.floor(index / gameDetails.width);

    // Going left -100% times our column value skips cards horizontally
    const leftStyle = `left: calc(-100% * ${leftOffset});`;
    // Going top -100% times our row value skips cards vertically
    const topStyle = `top: calc(-100% * ${topOffset});`;

    const widthStyle = `width: calc(100% * ${gameDetails.width});`;
    const heightStyle = `height: calc(100% * ${gameDetails.height});`;

    // Put it all together!
    this.set('imageStyle', `${widthStyle} ${heightStyle} ${leftStyle} ${topStyle}`);
  },
});
