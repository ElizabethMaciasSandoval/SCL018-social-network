// Este es el punto de entrada de tu aplicacion
import { myFunction } from './lib/firestore.js';
import { changeRoute } from './lib/routes.js';

myFunction();

const init = () => {
  window.location.hash = '#/login';
  window.addEventListener('hashchange', () => {
    changeRoute(window.location.hash);
  });
};
window.addEventListener('load', init);
