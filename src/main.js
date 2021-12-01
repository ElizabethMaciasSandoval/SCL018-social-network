// Este es el punto de entrada de tu aplicacion
import { onAuth } from './lib/firebase.js';
import { changeRoute } from './lib/routes.js';

const init = () => {
  window.location.hash = '#/login';
  window.addEventListener('hashchange', () => {
    onAuth();
    changeRoute(window.location.hash);
  });
};
window.addEventListener('load', init);
