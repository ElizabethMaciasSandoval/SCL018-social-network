import { signup } from '../lib/firebase.js';

export const drawSignUp = () => {
  const draw = document.createElement('div');
  const templatePageSignUp = `
    <section class="Container-SignUp">
    <img src="img/Registrate.png" alt="Logo registrate" class="logoSignIn">
      <input type="text" id="signName" class="Inputs-Registrer" placeholder="Ingresa tu nombre">
      <input type="email" id="signMail" class="Inputs-Registrer" placeholder="Ingresa tu correo electrónico">
      <input type="password" id="signPassword" class="Inputs-Registrer" placeholder="Ingresa tu clave">
      <button id="buttonSignUp" class="Button-Registrer">Regístrate</button>
      <p>¿Ya tienes cuenta?</p>
      <a href="#/login">Inicia sesión aquí</a>
    </section>
  `;
  draw.innerHTML = templatePageSignUp;

  const buttonSignUp = draw.querySelector('#buttonSignUp');
  buttonSignUp.addEventListener('click', () => {
    const name = draw.querySelector('#signName').value;
    const email = draw.querySelector('#signMail').value;
    const password = draw.querySelector('#signPassword').value;
    console.log(name);
    console.log(email);
    console.log(password);
    if (name === '' || email === '' || password === '') {
      alert('Por favor completa todos los campos');
    } else if (password.length < 6) {
      alert('Tu contraseña debe ser mayor a 6 caracteres');
    } else {
      signup(email, password, name);
    }
  });
  return draw;
};
