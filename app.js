const modalContainerOne = document.getElementById('modalcontainerone');
const modalOne = document.getElementById('modalone');
const projectOne = document.getElementById('projectone');

projectOne.addEventListener('click', (e) => {
  const button = document.getElementById('btnone');
  if ( button === e.target ) {
    modalContainerOne.style.display = 'grid';
  }
});