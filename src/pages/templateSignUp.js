export const drawSignUp= () =>{
    const draw = document.createElement("div");
  const templatePageSignUp =`
    <section>
      <h1>Registrate</h1>
      <input type="text" placeholder="Ingresa tu nombre">
      <input type="text" placeholder="Ingresa tu correo electrónico">
      <input type="text" placeholder="Ingresa tu clave">
      <button id="buttonSignUp">Registrate</button>
      <a href="#/wall">Inicia sesíon aquí</a>
    </section>
  `
  draw.innerHTML=templatePageSignUp;
  return draw;
};
