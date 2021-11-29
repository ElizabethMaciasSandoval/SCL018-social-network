import { login, googleLogin } from '../lib/firebase.js';

export const drawLogin = () => {
  const draw = document.createElement('div');
  const templatePageLogin = `
    <section>
      <section class = "containerWelcome">
      <section class = "firstPage">
        <img src="img/Logo-oficial_00.png" alt="logo" id="imgEtudiando" class="img-estudiando">
        <p class="Login-Message">Es una App Web creada para que estudiantes compartan material educativo, en la cual encontrarán
        información, recursos, links y temas relacionados con la PTU, orientación vocacional y emocional,
        sobre el espectro de carreras profesional, etc.
        </p>
        <img src="img/Img1.1.png" alt="mujer estudiando" class="woman-img">
        <i class="fas fa-angle-double-down"></i>
      </section>
      </section>
      <section class = "containerLogin">
      <img src="img/Inicia-sesion.png" alt="Logo Inicia Sesion" class="logoIniciaSesion">
        <input type="email" id="loginMail" class="Inputs-Login" placeholder="Ingresa tu correo electrónico">
        <input type="password" id="loginPassword" class="Inputs-Login" placeholder="Ingresa tu clave">
        <button id="loginButton" class="Button-Login">Ingresa</button>
        <p>O</p>
        <img src="img/logo-google.png" alt="LogoGoogle" id="logoGoogle">
        <p>¿No tienes cuenta?</p>
        <a href="#/signup">Registrate aqui</a>
      </section>
    </section>
  `;
  draw.innerHTML = templatePageLogin;

  const buttonLogin = draw.querySelector('#loginButton');
  buttonLogin.addEventListener('click', () => {
    const email = draw.querySelector('#loginMail').value;
    const password = draw.querySelector('#loginPassword').value;
    console.log(email);
    console.log(password);
    login(email, password);
  });

  const googleButton = draw.querySelector('#logoGoogle');
  googleButton.addEventListener('click', () => {
    console.log('Holiwi');
    googleLogin();
  });
  return draw;
};
