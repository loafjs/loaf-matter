import LM from 'loaf-matter';
import Circle from './components/Circle';
import './styles/main.scss';

class Example {

	constructor() {
		this.printBaseCanvas();
		this.printBaseObjet();
		this.baseEventListener();
	}

  printBaseCanvas() {
    LM.setEngine()
      .setGravity(0, 0.5)
      .setRender({
          element: document.body,
          engine: LM.engine,
          options: {
            width: 500,
            height: 500,
            wireframes: false,
            background: '#f5f5f5'
          }
        })
      .runEngine()
      .runRender();
  }

  printBaseObjet() {
    this.ground = LM.addObjet('rectangle', [250, 470, 400, 10, {
        isStatic: true,
        label: 'ground',
        render: {
          fillStyle: '#ddd'
        }
      }]).show();

    this.circle = new Circle('circle', [250, 0, 20, {
        label: 'circle',
        restitution: 0.8
      }]).show();
  }

  baseEventListener() {
  	let firstCheck = true;
  	LM.event('collisionStart', (e) => {
  		if(firstCheck) {
  			firstCheck = false;
				setTimeout(() => {
					this.circle.move(3, 3);
				}, 5000);
			}
    });
  }

}


new Example();