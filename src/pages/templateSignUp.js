import { signup } from '../lib/firebase.js';

export const drawSignUp = () => {
  const draw = document.createElement('div');
  const templatePageSignUp = `
    <section>
      <h1>Registrate</h1>
      <input type="text" id="signName" placeholder="Ingresa tu nombre">
      <input type="email" id="signMail" placeholder="Ingresa tu correo electrónico">
      <input type="password" id="signPassword" placeholder="Ingresa tu clave">
      <button id="buttonSignUp">Registrate</button>
      <a href="#/wall">Inicia sesíon aquí</a>
    </section>
  `;
  draw.innerHTML = templatePageSignUp;

  const buttonSignUp = draw.querySelector('#buttonSignUp');
  buttonSignUp.addEventListener('click', () => {
    const email = draw.querySelector('#signMail').value;
    const password = draw.querySelector('#signPassword').value;
    console.log(email);
    console.log(password);
    signup(email, password);
  });
  return draw;
};
