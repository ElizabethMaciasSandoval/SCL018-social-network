import {
  signOutUser,
  addDataPost,
  // auth,
  // printPost,
} from '../lib/firebase.js';
// import { newPost } from './post/templatePost.js';

export const drawWall = () => {
  const draw = document.createElement('div');
  const templatePageWall = `
    <section class="wall-container">
      <header>
        <img src="img/Logo-oficial_00.png" alt="logo" id="imgEtudiando" class="img-estudiando">
      </header>
      <nav class ="navWall">
        <img src="img/log-out.png" alt="cierre de sesión" class="log-out" id="logOut">
        <img src="img/writing.png" alt="crear post" class="new-post" id="newPost">
      </nav>
    <section class = "post-container">
      <img src="" alt="">
      <h2></h2>
    </section>
    <section>
    </section>
  `;
  draw.innerHTML = templatePageWall;
  const templateModalNewPost = `
  <section class="container-new-post" id="containerNewPost">
    <img src="img/cross.png" alt="cierre de modal" class="close-modal" id="closeModal">
    <textarea class="text-post" id="textPost" cols="30" rows="10"></textarea>
    <button class="btn-publicar" id="btnPublicar">Publicar</button>
  </section>
  `;
  const buttonNewPost = draw.querySelector('#newPost');
  buttonNewPost.addEventListener('click', () => {
    console.log('hola a todes');
    draw.innerHTML = templateModalNewPost;
    const buttonCloseModal = draw.querySelector('#closeModal');
    buttonCloseModal.addEventListener('click', () => {
      draw.innerHTML = templatePageWall;
    });
    const buttonPublicar = draw.querySelector('#btnPublicar');
    buttonPublicar.addEventListener('click', () => {
      const textPost = draw.querySelector('#textPost').value;
      console.log(textPost);
      console.log('hola a todos');
      addDataPost(textPost);
      draw.querySelector('#textPost').value = '';
      draw.innerHTML = templatePageWall;
    });
  });

  const buttonOutIcon = draw.querySelector('#logOut');
  buttonOutIcon.addEventListener('click', () => {
    console.log('okey');
    signOutUser();
  });
  return draw;
};
