export const drawLogin = () => {
  const draw = document.createElement('div');
  const templatePageLogin = `
    <section>
      <section class = "containerWelcome">
        <h1>¡¡BIENVENIDOS A ESTUDIANDO!!</h1>
        <h2>¿Qué es EstudiAndo?</h2>
        <p>Es una App Web creada para que estudiantes compartan material educativo, en la cual encontrarán
        información, recursos, links y temas relacionados con la PTU, orientación vocacional y emocional,
        sobre el espectro de carreras profesional, etc.
        </p>
      </section>
      <section class = "containerLogin">
        <img src="" alt="" id="">
        <input type="email" id="loginMail" placeholder="Ingresa tu correo electrónico">
        <input type="password" id="loginPassword" placeholder="Ingresa tu clave">
        <button id="loginButton">Ingresa</button>
        <p>O</p>
        <img src="img/logo-google.png" alt="LogoGoogle" id="logoGoogle">
        <p>¿No tienes cuenta?</p>
        <a href="#/signup">Registrate aqui</a>
      </section>
    </section>
  `;
  draw.innerHTML = templatePageLogin;
  return draw;
};
