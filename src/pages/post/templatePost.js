// import { addDataPost } from '../../lib/firebase';

export const newPost = () => {
  const draw = document.createElement('div');
  const templatePost = `
 <input type="checkbox" id="btnModal" />
<section>
<div>
 <label for="btnModal"><img src="" id="btnBack" class="btn-back" alt="back"/></label>
</div>
<div>
<textarea id="modalNewPost"class="modal-new-post" placeholder="Escribe acá tu publicación"></textarea>
<button id="btnPost" class="btn-post"></button>
</div>
</section>`;
  draw.innerhtml = templatePost;
  const buttonPost = draw.querySelector('#btnPost');
  const writePost = draw.querySelector('#modalNewPost').value;
  buttonPost.addEventListener('click', () => {
    addDataPost(writePost);
  });
  return draw;
};
