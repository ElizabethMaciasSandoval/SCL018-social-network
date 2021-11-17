// Este es el punto de entrada de tu aplicacion
import { myFunction } from './lib/index.js';
import { drawLogin } from './lib/pages/templateLogin.js';
import { changeRoute } from './lib/routes.js';

myFunction();
document.getElementById("root").innerHTML+=drawLogin();
const init = () =>{
    window.addEventListener("hashchange", () =>{
        changeRoute(window.location.hash);
    });
};
window.addEventListener("load", init);

