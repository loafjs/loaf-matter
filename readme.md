# Loaf Matter [![npm](https://img.shields.io/npm/v/loaf-matter.svg)](https://www.npmjs.com/package/loaf-matter) [![npm](https://img.shields.io/npm/dm/loaf-matter.svg)](https://www.npmjs.com/package/loaf-matter)
A library to help you use [matter.js](http://brm.io/matter-js/). this is based on using one world and one engine.  
I currently use Webpack, Babel, React. you do not need to use React, but you should use Webpack and Babel.

## Notice
This is unstable because it is an early version.

## Required
* [Matter.js](http://brm.io/matter-js/)
* [Webpack.js](https://webpack.js.org/)
* [Babel.js](https://babeljs.io/)

## Install
```
npm install --save matter-js
npm install --save loaf-matter
```

## Basic function
You can use the basic function of matter.js as is.  
```js
import Matter from 'matter-js';

Matter.Bodies.circle(100, 100, 20); 
```
Below is the same as above.
```js
import LM from 'loaf-matter';

LM.Bodies.circle(100, 100, 20); 
```

## Shortening function
You can abbreviate the method using additional predefined methods.  
```js
import Matter from 'matter-js';

const Bodies = Matter.Bodies;
const World = Matter.World;
const Render = Matter.Render;
const Engine = Matter.Engine;

const engine = Engine.create();
const render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    width: 500,
    height: 500
  }
});

const circle = Bodies.circle(100, 100, 20);
World.add(engine.world, circle);

Engine.run(engine);
Render.run(render);
```
It can be used as follows.
```js
import LM from 'loaf-matter';

LM.setEngine();
LM.setRender({
  element: document.body,
  engine: LM.engine,
  option: {
    width: 500,
    height: 500
  }
});

const circle = LM.addObjet('circle', [100, 100, 20]);
circle.show();

LM.runEngine();
LM.runRender();
```

## Shape class definition
By default, you can inherit the defined classes.
```js
// ./ChildObjet.js
import LM, { Objet } from 'loaf-matter';

class ChildObjet extends Objet {

  constructor(...props) {
    super(...props);
  }

  move(x, y) {
    this.setVelocity(x, y);
  }
}

export default ChildObjet
```
```js
import ChildFigure from './ChildFigure';

const newObjet = new ChildFigure('rectangle', [100, 100, 30, 30]);
newObjet.show();
```
Here, `this.setVelocity()` functions as `Matter.Body.setVelocity(body, vertices)`.  
link. http://brm.io/matter-js/docs/classes/Body.html#method_setVelocity

## Add Methods
### 1. addObjet()  
Create an Objet that inherits a few methods.  
For example, you can add an Objet to World with the included show method.  
```js
import LM from 'loaf-matter';

const circle = LM.addObjet('circle', [100, 100, 20]);
circle.show();
```

### 2. ignoreGravity()  
Let the individual Objet ignore gravity.  
For example, 'circle' falls under the influence of gravity, 'ignoreGravitycircle' is not affected by its gravity and will remain in place.
```js
import LM from 'loaf-matter';

LM.setEngine();
LM.setGravity(0, 0.3);

...

const circle = LM.addObjet('circle', [200, 200, 20]);
circle.show();

const ignoreGravitycircle = LM.addObjet('circle', [100, 100, 20]);
ignoreGravitycircle.show();
ignoreGravitycircle.ignoreGravity();
```

