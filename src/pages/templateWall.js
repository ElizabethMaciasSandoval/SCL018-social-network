import { signOutUser } from '../lib/firebase.js';
import { newPost } from './post/templatePost.js';

export const drawWall = () => {
  const draw = document.createElement('div');
  const templatePageWall = `
    <section class= wall-container>
      <header>
        <img src="img/Logo-oficial_00.png" alt="logo" id="imgEtudiando" class="img-estudiando">
        <img src="" alt="">
      </header>
      <nav class = "navWall">
      <label for="btn-modal" class="lbl-modal">
      <img src="img/writing.png" alt="Crear publicación" class="new-post" id="newPost">
      </label>
      <img src="img/log-out.png" alt="cierre de sesión" class="log-out" id="logOut">
      </nav>
      </section>
      <section class = "post-container">
        <img src="" alt="">
        <h2></h2>
      </section>
      <section>
      </section>
  `;
  draw.innerHTML = templatePageWall;
  const buttonNewPost = draw.querySelector('#newPost');
  buttonNewPost.addEventListener('click', () => {
    newPost();
  });
  const outIcon = draw.querySelector('#logOut');
  console.log(outIcon);
  outIcon.addEventListener('click', () => {
    console.log('okey');
    signOutUser();
  });

  // draw.innerHTML = templatePageWall;

  return draw;
};
