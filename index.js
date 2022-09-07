const hamburger = document.querySelector('.hamburger');
const Menu = document.querySelector('.menu');
const navlinks = document.querySelectorAll('.nav-link');
const closeBtn = document.querySelector('.close_btn');

function open() {
  hamburger.classList.toggle('active');
  Menu.classList.toggle('active');
}

hamburger.addEventListener('click', open);
closeBtn.addEventListener('click', open);
navlinks.forEach((link) => {
  link.addEventListener('click', open);
});

function popup() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}

const allCards = [{
  id: 'card1',
  title: 'Tonic',
  feature: ['Canopy', 'Back End Dev', 2015],
  sdescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy',
  ldescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  liveLink: 'https://iptysam.github.io/The_Portfolio/',
  cardImage: 'Images/SnapshootPortfolio.png',
  dotImg: 'Images/Counter.png',
  btags: ['html', 'css', 'javascript', 'github', 'ruby', 'bootstraps'],
  stags: ['html', 'css', 'javascript'],
  class: 'container1',
},
{
  id: 'card2',
  title: 'Multi-Post Stories',
  feature: ['Canopy', 'Back End Dev', 2015],
  sdescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy',
  ldescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  liveLink: 'https://iptysam.github.io/The_Portfolio/',
  cardImage: 'Images/SnapshootPortfolio3.png',
  dotImg: 'Images/Counter.png',
  btags: ['html', 'css', 'javascript', 'github', 'ruby', 'bootstraps'],
  stags: ['html', 'css', 'javascript'],
  class: 'container2',
},
{
  id: 'card3',
  title: 'Tonic',
  feature: ['Canopy', 'Back End Dev', 2015],
  sdescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy',
  ldescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  liveLink: 'https://iptysam.github.io/The_Portfolio/',
  cardImage: 'Images/SnapshootPortfolio1.png',
  dotImg: 'Images/Counter.png',
  btags: ['html', 'css', 'javascript', 'github', 'ruby', 'bootstraps'],
  stags: ['html', 'css', 'javascript'],
  class: 'container3',
},
{
  id: 'card4',
  title: 'Multi-post Stories',
  feature: ['Canopy', 'Back End Dev', 2015],
  sdescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy',
  ldescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  liveLink: 'https://iptysam.github.io/The_Portfolio/',
  cardImage: 'Images/SnapshootPortfolio2.png',
  dotImg: 'Images/Counter.png',
  btags: ['html', 'css', 'javascript', 'github', 'ruby', 'bootstraps'],
  stags: ['html', 'css', 'javascript'],
  class: 'container4',
},
]

const ids = arr.map(({ id }) => {
  return id;
});

function openForm() {
  var popup= document.getElementById("card1");
  popup.classList.toggle("show");
}

