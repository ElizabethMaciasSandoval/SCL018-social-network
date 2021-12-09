import {
  signOutUser,
  addDataPost,
} from '../lib/firebase.js';

import { postView } from './post.js';

export const drawWall = () => {
  const draw = document.createElement('div');
  const templatePageWall = `
    <section class="wall-container">
     <section class="headerNav">
      <header>
        <img src="img/Logo-oficial_00.png" alt="logo" id="imgEtudiando" class="img-estudiando">
      </header>
      <nav class ="navWall">
        <img src="img/log-out.png" alt="cierre de sesión" class="log-out" id="logOut">
      </nav>
      </section>
     <section class="container-new-post" id="containerNewPost">
       <textarea class="text-post" id="textPost" cols="50" rows="5" placeholder="Escribe aquí..."></textarea>
       <button class="btn-publicar" id="btnPublicar">Publicar</button>
     </section>
     <section class= "post-container" id="postContainer">
     </section>
    </section>
  `;

  draw.innerHTML = templatePageWall;

  // Funciones del pageWall y funciones del modal
  const buttonPublicar = draw.querySelector('#btnPublicar');
  buttonPublicar.addEventListener('click', () => {
    const textPost = draw.querySelector('#textPost').value;
    if (textPost === '') {
      alert('Escribe tu publicación, por favor');
    } else {
      addDataPost(textPost);
      draw.querySelector('#textPost').value = '';
    }
  });

  postView();

  // Botón de cierre de sesión
  const buttonOutIcon = draw.querySelector('#logOut');
  buttonOutIcon.addEventListener('click', () => {
    console.log('okey');
    signOutUser();
  });

  return draw;
};
