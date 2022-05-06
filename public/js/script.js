import { BASE_URL } from './modules/modulesConfig.js';
import { renderPetCards } from './modules/renderPets.js';

const petsOutputEl = document.querySelector('.pets-output');
const viewLogElement = document.querySelector('.view-log-button');

async function getPets() {
  try {
    const resp = await fetch(`${BASE_URL}/pets`);
    console.log('resp ===', resp);
    if (resp.ok === false) throw new Error('something is wrong');
    const petsArr = await resp.json();
    renderPetCards(petsArr, petsOutputEl);
  } catch (error) {
    console.warn('error ===', error);
  }
}
getPets();

viewLogElement.addEventListener('click', () => {
  window.location.href = 'healthLog.html';
});
