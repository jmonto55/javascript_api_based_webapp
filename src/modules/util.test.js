/**
 * @jest-environment jsdom
 */

import updateMealsQt from './util.js';

describe('Add all items counter Tests', () => {
  document.body.innerHTML = `
  <li class="cont_meals">Meals</li>

  <div class="cards_container">
    <card id="52776" class="card"></card>
    <card id="52765" class="card"></card>
  </div>`;

  it('Should test if updateMealsQt is adding all items counter to the home page', () => {
    const mealsCont = document.querySelector('.cont_meals');
    updateMealsQt();
    expect(mealsCont.innerHTML).toBe('Meals (2)');
  });
});
