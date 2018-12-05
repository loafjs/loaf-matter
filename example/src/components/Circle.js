import LM, { Objet } from 'loaf-matter';

class Circle extends Objet {

  constructor(...props) {
    super(...props);
  }

  move(x, y) {
    this.setVelocity(x, y);
  }

  moveStop() {
    this.setVelocity(0, 0);
  }
}

export default Circle