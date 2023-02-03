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
    mTitle: 'Tonic',
    image: 'images/CardImg-1.png',
    longDes:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    live: 'https://luchy-b.github.io/',
    shortDes:
            'A daily selection of privately personalized reads; no accounts or sign- ups required.',
    source: 'https://github.com/Luchy-B/Portfolio',
    languages: ['html', 'css', 'javascript'],
    roles: ['Canopy', 'Back End Dev', 2015],
  },
  {
    mTitle: 'Multi-Post Stories',
    image: 'images/CardImg-2.png',
    longDes:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    live: 'https://luchy-b.github.io/',
    shortDes:
            'A daily selection of privately personalized reads; no accounts or sign- ups required.',
    source: 'https://github.com/Luchy-B/Portfolio',
    languages: ['html', 'css', 'javascript'],
    roles: ['Canopy', 'Back End Dev', 2015],
  },
  {
    mTitle: 'Tonic',
    image: 'images/CardImg-3.png',
    longDes:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    live: 'https://luchy-b.github.io/',
    shortDes:
            'A daily selection of privately personalized reads; no accounts or sign- ups required.',
    source: 'https://github.com/Luchy-B/Portfolio',
    languages: ['html', 'css', 'javascript'],
    roles: ['Canopy', 'Back End Dev', 2015],
  },
  {
    mTitle: 'Tonic',
    image: 'images/CardImg-1.png',
    longDes:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    live: 'https://luchy-b.github.io/',
    shortDes:
            'A daily selection of privately personalized reads; no accounts or sign- ups required.',
    source: 'https://github.com/Luchy-B/Portfolio',
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