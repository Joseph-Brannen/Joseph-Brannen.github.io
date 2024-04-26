const modalContainerOne = document.getElementById('modalcontainerone');
const modalOne = document.getElementById('modalone');
const projectOne = document.getElementById('projectone');

projectOne.addEventListener('click', (e) => {
  const button = document.getElementById('btnone');
  if ( button === e.target ) {
    modalContainerOne.style.display = 'grid';
  }
});


const modalContainerTwo = document.getElementById('modalcontainertwo');
const modalTwo = document.getElementById('modaltwo');
const projectTwo = document.getElementById('projecttwo');

projectTwo.addEventListener('click', (e) => {
  const button = document.getElementById('btntwo');
  if ( button === e.target ) {
    modalContainerTwo.style.display = 'grid';
  }
});


const modalContainerThree = document.getElementById('modalcontainerthree');
const modalThree = document.getElementById('modalthree');
const projectThree = document.getElementById('projectthree');

projectThree.addEventListener('click', (e) => {
  const button = document.getElementById('btnthree');
  if ( button === e.target ) {
    modalContainerThree.style.display = 'grid';
  }
});


const modalContainerFour = document.getElementById('modalcontainerfour');
const modalFour = document.getElementById('modalfour');
const projectFour = document.getElementById('projectfour');

projectFour.addEventListener('click', (e) => {
  const button = document.getElementById('btnfour');
  if ( button === e.target ) {
    modalContainerFour.style.display = 'grid';
  }
});