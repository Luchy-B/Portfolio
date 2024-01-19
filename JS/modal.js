// Modal Callup
const modal = document.querySelector('#modalContainers');
const ModalCloseBtn = document.querySelector('#close-btn');
const modalTitles = document.querySelector('#modalTitle');
const modalRoles = document.querySelector('#canopy');
const cardImg = document.querySelector('#modal-Img');
const longDescpt = document.querySelector('#modalDes');
const cardLang = document.querySelector('#modalLang');
const modalLive = document.querySelector('#seeLive');
const modalSource = document.querySelector('#seeSource');

// storing card section for the desktop part.
const cards = [
  {
    mTitle: 'Budget App',
    image: 'images/dazz.png',
    longDes:
            'Budget App allows a user to add categories of things and transactions made',
    live: 'https://dazzling.onrender.com/',
    shortDes:
            'Budget App allows a user to add categories of things and transactions made.',
    source: 'https://github.com/Luchy-B/budget',
    languages: ['html', 'css', 'javascript'],
    roles: ['Canopy', 'Back End Dev', 2015],
  },
  {
    mTitle: 'Car Collection',
    image: 'images/car-collection.PNG',
    longDes:
            'Car_Collection application is a website application that allows users to add, delete and reserve car.',
    live: 'https://mathmagicians-blbn.onrender.com/',
    shortDes:
            'Car_Collection application is a website application that allows users to add, delete and reserve car.',
    source: 'https://github.com/Kaghenimbale/car_collection',
    languages: ['html', 'css', 'javascript', 'rails'],
    roles: ['Canopy', 'Back End Dev', 2015],
  },
  {
    mTitle: 'Covid',
    image: 'images/covid.PNG',
    longDes:
            'Covid is a App that provides reports of Covid-19. It displays data of different countries and histrories of analysis made.',
    live: 'https://covid-19-rj49.onrender.com/',
    shortDes:
            'Covid is a App that provides reports of Covid-19. It displays data of different countries and histrories of analysis made.',
    source: 'https://github.com/Luchy-B/covid',
    languages: ['html', 'css', 'javascript', 'react'],
    roles: ['Canopy', 'Back End Dev', 2015],
  },
  {
    mTitle: 'Awesome Book',
    image: 'images/awesome.PNG',
    longDes:
            'The Awesome Book app is a simple web application that allows users to keep track of books they have read or want to read. Users can create, add or edit a book.',
    live: 'https://luchy-b.github.io/Project-AwesomeBook-Module/',
    shortDes:
            'The Awesome Book app is a simple web application that allows users to keep track of books they have read or want to read. Users can create, add or edit a book.',
    source: 'https://github.com/Luchy-B/Project-AwesomeBook-Module',
    languages: ['html', 'css', 'javascript'],
    roles: ['Canopy', 'Back End Dev', 2015],
  },
];

const portfolio = document.querySelector('#portfolio');

// Adding cards dynamically
for (let i = 0; i < cards.length; i += 1) {
  let langu = '';
  cards[i].languages.forEach((card) => {
    langu = `${langu}<li class="${card}">${card}</li>`;
  });

  let role = '';
  cards[i].roles.forEach((rol) => {
    role = `${role}<li class="${rol}">${rol}</li>`;
  });

  portfolio.innerHTML += `
    <div class="card">
      <div class="img-Div">
        <img src="${cards[i].image}" alt="Card Image" />
      </div>

      <div class="content">
        <h2>
        ${cards[i].mTitle}
        </h2>
        <ul class="canopy">
           ${role}
        </ul>
        
        <p class="para">
        ${cards[i].shortDes}
        </p>
        <ul class="langUl">
        ${langu}
        </ul>
        <input type="button" value="See Project" class="btn-1 card-btn card-btn-${i}" />
      </div>
    </div>
  `;
}

// Code for popup
for (let i = 0; i < cards.length; i += 1) {
  document.querySelector(`.card-btn-${i}`).addEventListener('click', () => {
    modal.style.display = 'block';

    let langu = '';
    cards[i].languages.forEach((cards) => {
      langu = `${langu}<li class="${cards}">${cards}</li>`;
    });

    let role = '';
    cards[i].roles.forEach((rol) => {
      role = `${role}<li class="${rol}">${rol}</li>`;
    });

    modalTitles.innerHTML = `${cards[i].mTitle}`;
    modalRoles.innerHTML = `${role}`;
    cardLang.innerHTML = `${langu}`;
    longDescpt.innerHTML = `${cards[i].longDes}`;
    cardImg.innerHTML = `<img src="${cards[i].image}" alt="Card Image" />`;
    modalLive.setAttribute('href', cards[i].live);
    modalSource.setAttribute('href', cards[i].source);
  });
}

// Modal Close
ModalCloseBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});