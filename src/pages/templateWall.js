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
        <img src="img/writing.png" alt="crear post" class="new-post" id="newPost">
      </nav>
    </section>
    <section class= "post-container" id="postContainer">
    </section>
    </section>
  `;
  draw.innerHTML = templatePageWall;

  //Template del modal para crear publicaciones
  const drawModal = document.createElement('div');
  const templateModalNewPost = `
  <section class="container-new-post" id="containerNewPost">
    <img src="img/cross.png" alt="cierre de modal" class="close-modal" id="closeModal">
    <textarea class="text-post" id="textPost" cols="30" rows="10"></textarea>
    <button class="btn-publicar" id="btnPublicar">Publicar</button>
  </section>
  `;
  drawModal.innerHTML = templateModalNewPost;

  //Funciones del pageWall y funciones del modal
  const buttonNewPost = draw.querySelector('#newPost');
  buttonNewPost.addEventListener('click', () => {
    console.log('hola a todes');
    drawModal.innerHTML = templateModalNewPost;
    const buttonCloseModal = drawModal.querySelector('#closeModal');
    buttonCloseModal.addEventListener('click', () => {
      draw.innerHTML = templatePageWall;
    });
    const buttonPublicar = drawModal.querySelector('#btnPublicar');
    buttonPublicar.addEventListener('click', () => {
      const textPost = drawModal.querySelector('#textPost').value;
      console.log(textPost);
      console.log('hola a todos');
      addDataPost(textPost);
      drawModal.querySelector('#textPost').value = '';
      draw.innerHTML = templatePageWall;
    });
  });
  postView();

  //Botón de cierre de sesión
  const buttonOutIcon = draw.querySelector('#logOut');
  buttonOutIcon.addEventListener('click', () => {
    console.log('okey');
    signOutUser();
  });

  return draw;
};
