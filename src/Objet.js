import Middleware from './Middleware';

class Objet extends Middleware {

  constructor(name, props=[]) {
    super();
    if(!props.length) return console.warn('Empty property');
    this.body = Middleware.Bodies[name](...props);
  }

  setVelocity(x, y) {
    Middleware.Body.setVelocity(this.body, {x, y});
  }

  show() {
    Middleware.World.add(Middleware.world, this.body);
  }

}

export default Objet