const hamburger = document.querySelector('#openHam');
const closeBtn = document.querySelector('#times');
// const pcard = document.getElementById('portfolio');
// const modal = document.getElementById('modalContainer');
// const title = document.getElementById('modalTitle');
// const image = document.getElementById('modal-Img');
// const longDes = document.getElementById('modalDes');
// const live = document.getElementById('seeLive');
// const source = document.getElementById('seeSource');
// const body = document.getElementById('body');


// const cards = [
//     {
//         mTitle: 'Tonic',
//         image: 'images/CardImg-1.png',
//         longDes:
//             'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
//         live: 'https://luchy-b.github.io/', 
//         shortDes:
//             'A daily selection of privately personalized reads; no accounts or sign- ups required.',
//         source: 'https://github.com/Luchy-B/Portfolio', 
//         languages: ['html', 'javascript', 'css'],
//         roles: ['Canopy', 'Back End Dev', 2015],
//     },
//     {
//         mTitle: 'Multi-Post Stories',
//         image: 'images/CardImg-2.png',
//         longDes:
//             'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
//         live: 'https://luchy-b.github.io/', 
//         shortDes:
//             'A daily selection of privately personalized reads; no accounts or sign- ups required.',
//         source: 'https://github.com/Luchy-B/Portfolio', 
//         languages: ['html', 'javascript', 'css'],
//         roles: ['Canopy', 'Back End Dev', 2015],
//     },
//     {
//         mTitle: 'Tonic',
//         image: 'images/CardImg-3.png',
//         longDes:
//             'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
//         live: 'https://luchy-b.github.io/', 
//         shortDes:
//             'A daily selection of privately personalized reads; no accounts or sign- ups required.',
//         source: 'https://github.com/Luchy-B/Portfolio', 
//         languages: ['html', 'javascript', 'css'],
//         roles: ['Canopy', 'Back End Dev', 2015],
//     },
//     {
//         mTitle: 'Tonic',
//         image: 'images/CardImg-1.png',
//         longDes:
//             'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
//         live: 'https://luchy-b.github.io/', 
//         shortDes:
//             'A daily selection of privately personalized reads; no accounts or sign- ups required.',
//         source: 'https://github.com/Luchy-B/Portfolio', 
//         languages: ['html', 'javascript', 'css'],
//         roles: ['Canopy', 'Back End Dev', 2015],
//     }
// ]

// Mobile Menu 
function show() {
    document.getElementById('cross').style.display = 'block';
  }
  
  function hide() {
    document.getElementById('cross').style.display = 'none';
  }
  
  hamburger.addEventListener('click', show);
  closeBtn.addEventListener('click', hide);

// // Modal

// cards.map((card) => pcard.innerHTML += `<div class="card">
// <div class="img-Div">
//   <img src="${card.image}" alt="Card Image"/>
// </div>
// <div class="content">
// <h2>${card.mTitle}</h2>

// <div class="content-List">
// ${card.roles.map((role) => `<p class="canopy">${role} </p>
// <p><img src="images/fullstop.png" alt="Fullstop-icon" /></p>`).join('')}
// </div>

// <p class="para">
//           ${card.shortDes}
//         </p>

//         <ul>
//         ${card.languages.map((lang) => `<li>${lang}</li>`).join('')}
//       </ul>

//       <input type="button" value="See Project" class="btn-1" />
      
//       </div>
//     </div>
// `)



// popup for desktop
// for (let i = 0; i < cards.length; i += 1) {
//     document.querySelector(`.btn-1-${i}`).addEventListener('click', () => {
//         modalContainer.style.display = 'block';
  
//       let lang = '';
//       cards[i].languages.forEach((cards) => {
//         lang = `${lang}<li class="${cards}">${cards}</li>`;
//       });
  
//       let tech = '';
//       cards[i].roles.forEach((techn) => {
//         tech = `${tech}<li class="${techn}">${techn}</li>`;
//       });
  
//       cardTitle.innerHTML = `${cards[i].mTitle}`;
//       cardInfo.innerHTML = `${roles}`;
//       cardLang.innerHTML = `${languages}`;
//       cardText.innerHTML = `${cards[i].longDes}`;
//       cardImg.innerHTML = `<img src="${cards[i].image}" class="card-img">`;
//       modalLive.setAttribute('href', cards[i].live);
//       modalSource.setAttribute('href', cards[i].source);
//     });
//   }


//   close button event listener
  // modalCloseBtn.addEventListener('click', () => {
  //   modalContainer.style.display = 'none';
  // });


// const open = (card) => {
//     title.innerHTML = cards[card].mTitle;
//     image.src = cards[card].image;
//     longDes.innerHTML = cards[card].longDes;
//     live.href = cards[card].live;
//     source.href = cards[card].source;
//     modal.style.display = 'block';
//     body.style.overflow = 'hidden';
// };
  
//   const close = () => {
//     modal.style.display = 'none';  
//     body.style.overflow = 'auto';
//   };
  
  
//   open();
//   close();