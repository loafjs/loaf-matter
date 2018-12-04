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
  }

  setDensity(denity) {
    Middleware.Body.setDensity(this.body, denity);
  }

  setPosition(x, y) {
    Middleware.Body.setPosition(this.body, {x, y});
  }

  setPositionX(x) {
    Middleware.Body.setPosition(this.body, {x, y: this.position.y});
  }

  setPositionY(y) {
    Middleware.Body.setPosition(this.body, {x: this.position.x, y});
  }

  setVelocity(x, y) {
    Middleware.Body.setVelocity(this.body, {x, y});
  }

  setAngle(angle) {
    Middleware.Body.setAngle(this.body, angle);
  }

  setRotate(rotation) {
    Middleware.Body.rotate(this.body, rotation);
  }

  applyForce(position, force) {
    Middleware.Body.applyForce(this.body, position, force);
  }

  ignoreGravity(boolean) {
    Middleware.event('beforeUpdate', () => {
      const gravity = Middleware.gravity;
      this.body.applyForce({x: 0, y:0}, {
        x: -gravity.x * gravity.scale * this.body.mass,
        y: -gravity.y * gravity.scale * this.body.mass
      })
    });
  }

  show() {
    Middleware.World.add(Middleware.world, this.body);
  }

}

export default Objet