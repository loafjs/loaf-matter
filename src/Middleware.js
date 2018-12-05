import Core from './Core';

let engine = null;
let world = null;
let render = null;
let canvas = null;

class Middleware extends Core {

  static get canvas() {
    return canvas;
  }

  static get engine() {
    return engine;
  }

  static get world() {
    return world;
  }

  static get render() {
    if(!render) return console.warn('Empty render');
    return render;
  }

  static get gravity() {
    return { x: world.gravity.x, y: world.gravity.y, scale: world.gravity.scale };
  }

  static setEngine(props) {
    engine = Core.Engine.create(props);
    world = engine.world;
    return this;
  }

  static setRender(props) {
    render = Core.Render.create(props);
    canvas = render.canvas;
    return this;
  }

  static setGravity(x, y, scale) {
    if(x === 0 || x) world.gravity.x = x;
    if(y === 0 || y) world.gravity.y = y;
    if(scale === 0 || scale) world.gravity.scale = sacle;
    return this;
  }

  static event(name, callback) {
    Core.Events.on(engine, name, callback);
    return this;
  }

  static remove(body) {
    Core.World.remove(world, body);
    return this;
  }

  static runEngine() {
    Core.Engine.run(engine);
    return this;
  }

  static runRender() {
    Core.Render.run(render);
    return this;
  }

}

export default Middleware