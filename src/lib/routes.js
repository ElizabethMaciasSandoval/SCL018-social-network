import { drawLogin } from '../pages/templateLogin.js';
import { drawSignUp } from '../pages/templateSignUp.js';
import { drawWall } from '../pages/templateWall.js';

export const changeRoute = (hash) => {
  const containerRoot = document.getElementById('root');
  containerRoot.innerHTML = '';
  switch (hash) {
    case '#/':
    case '#/login':
      containerRoot.appendChild(drawLogin());
      break;
    case '#/signup':
      containerRoot.appendChild(drawSignUp());
      break;
    case '#/wall':
      containerRoot.appendChild(drawWall());
      break;
    default:
      alert('te perdiste Wey, devuélvete');
      break;
  }
};
