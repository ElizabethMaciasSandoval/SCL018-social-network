import { signOutUser } from '../lib/firebase.js';

export const drawWall = () => {
  const draw = document.createElement('div');
  const templatePageWall = `
    <section class= wall-container>
    <section>
    <img src="img/Logo-oficial_00.png" alt="logo" id="imgEtudiando" class="img-estudiando">
      <img src="" alt="">
    </section>
    <section class = "post-container">
      <img src="" alt="">
      <h2></h2>
      <input type="text" placeholder="Titulo" class="title-post">
      <textarea name="" class="content-post" id="" cols="30" rows="10" placeholder="Descripción" ></textarea>
      <button id="toPostButton" class="button-post">Publicar</button>
    </section>
    <section>
    </section>
    </section>
    <footer>
    <i class="fas fa-sign-out-alt" id="signOutIcon"></i>
    </footer>
  `;
  draw.innerHTML = templatePageWall;
  const outIcon = draw.querySelector('#signOutIcon');
  outIcon.addEventListener('click', () => {
    signOutUser();
  });

  return draw;
};
