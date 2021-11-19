export const drawWall = () => {
  const draw= document.createElement("div");
  const templatePageWall = `
     <section>
     <h1>EstudiAndo</h1>
    <img src="" alt="">
    </section>
    <section>
     <img src="" alt="">
        <h2></h2>
        <input type="text" placeholder="Titulo">
     <textarea name="" id="" cols="30" rows="10" placeholder="Descripción"></textarea>
    <button id="toPostButton">Publicar</button>
  </section>
 <section>
</section>
<footer>
    <img src="" alt="">
</footer>
  `
  draw.innerHTML=templatePageWall;
  return draw;
};
