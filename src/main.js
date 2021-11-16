// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';
import { drawLogin } from './lib/pages/templateLogin.js';
import {} from './lib/pages/templateSignUp.js';
import {} from './lib/pages/templateWall.js';

myFunction();
document.getElementById('root').innerHTML = drawLogin();
