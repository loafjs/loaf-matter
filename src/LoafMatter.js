import Middleware from './Middleware';
import Objet from './Objet';

class LoafMatter extends Middleware {

  static addObjet(name, props=[]) {
    if(!props.length) return console.warn('Empty property');
    return new Objet(name, props);
  }

}

export default LoafMatter