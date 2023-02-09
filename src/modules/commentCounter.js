/**
 * @jest-environment jsdom
 */
export const commentCounter = () => {
  const updatedCounter = document.querySelector('.comment_list').getElementsByTagName('li').length;
  return updatedCounter;
};

// describe('Comment counter test', () => {
//   document.body.innerHTML = `
//     <ul class="comment_list">
//       <li></li>
//       <li></li>
//       <li></li>
//     </ul>`;

//   it('Should test if number of comments was updated', () => {
//     const counter = commentCounter();
//     expect(counter).toBe(3);
//   });
// });

export { commentCounter as default };