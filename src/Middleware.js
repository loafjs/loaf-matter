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
    return { x: world.gravity.x, y: world.gravity.y };
  }

  static setEngine(props) {
    engine = Core.Engine.create(props);
    world = engine.world;
  }

  static setRender(props) {
    render = Core.Render.create(props);
    canvas = render.canvas;
  }

  static setGravity(x, y) {
    world.gravity.x = x;
    world.gravity.y = y;
  }

  static event(name, callback) {
    Core.Events.on(engine, name, callback);
  }

  static remove(body) {
    Core.World.remove(world, body);
  }

  static runEngine() {
    Core.Engine.run(engine);
  }

  static runRender() {
    Core.Render.run(render);
  }

}

export default Middleware