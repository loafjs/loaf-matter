import Middleware from './Middleware';

class Objet extends Middleware {

  constructor(name, props=[]) {
    super();
    if(!props.length) return console.warn('Empty property');
    this.body = Middleware.Bodies[name](...props);
  }

  get position() {
    return this.body.position;
  }

  setMass(mass) {
    Middleware.Body.setMass(this.body, mass);
    return this;
  }

  setDensity(denity) {
    Middleware.Body.setDensity(this.body, denity);
    return this;
  }

  setPosition(x, y) {
    if((x === 0 || x) && (y === 0 || y)) Middleware.Body.setPosition(this.body, {x, y});
    else if(x === 0 || x) Middleware.Body.setPosition(this.body, {x, y: this.position.y});
    else if(y === 0 || y) Middleware.Body.setPosition(this.body, {x: this.position.x, y});
    return this;
  }

  setVelocity(x, y) {
    Middleware.Body.setVelocity(this.body, {x, y});
    return this;
  }

  setAngle(angle) {
    Middleware.Body.setAngle(this.body, angle);
    return this;
  }

  setRotate(rotation) {
    Middleware.Body.rotate(this.body, rotation);
    return this;
  }

  applyForce(position, force) {
    Middleware.Body.applyForce(this.body, position, force);
    return this;
  }

  ignoreGravity() {
    const gravity = Middleware.gravity;
    Middleware.event('beforeUpdate', () => {
      this.applyForce({x: 0, y:0}, {
        x: -gravity.x * gravity.scale * this.body.mass,
        y: -gravity.y * gravity.scale * this.body.mass
      })
    });
    return this;
  }

  show() {
    Middleware.World.add(Middleware.world, this.body);
    return this;
  }

}

export default Objet