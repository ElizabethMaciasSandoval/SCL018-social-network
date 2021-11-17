import { drawLogin } from '../lib/pages/templateLogin.js';
import { drawSignUp } from '../lib/pages/templateSignUp.js';
import { drawWall } from '../lib/pages/templateWall.js';

export const changeRoute = (hash) =>{
  const containerRoot = document.getElementById('root');
  containerRoot.innerHTML="";
  switch (hash){
    case "/#/login":
    console.log("holi holi");
      containerRoot.appendChild(drawLogin());
      break;
    case "/#/signup":
       console.log("como estas");
      containerRoot.appendChild(drawSignUp());
      break;
    case "/#/wall":
        console.log("bien y tu ?");
      containerRoot.appendChild(drawWall());
      break;
    default:
      console.log("te perdiste Wey, devuélvete");
  };
};

