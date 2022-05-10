function makeEl(tagName, text, dest, elClass = null) {
  const el = document.createElement(tagName);
  el.textContent = text;
  if (elClass) el.className = elClass;
  dest.appendChild(el);
  return el;
}

export function createPetCard(newPetObj) {
  const sectionEl = document.createElement('section');

  sectionEl.className = 'pet-section';
  makeEl('h3', `${newPetObj.name}`, sectionEl, 'name');
  makeEl('p', `${newPetObj.dob}`, sectionEl, 'dob');
  makeEl('p', `${newPetObj.client_email}`, sectionEl, 'client_email');
  const viewLogElement = makeEl('button', 'VIEW LOG', sectionEl, 'view-log-button');
  viewLogElement.addEventListener('click', (e) => {
    console.log('click');
    window.location.href = 'healthLog.html';
  });
  const deleteButtonEl = makeEl('button', 'DELETE', sectionEl, 'delete-button');

  return sectionEl;
}

export async function renderPetCards(cardsArr, dest) {
  dest.innerHTML = '';
  cardsArr.forEach((pObj) => {
    const card = createPetCard(pObj);
    dest.append(card);
  });
}
