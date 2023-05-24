let modal = document.getElementById("simpleModal");
let modalBtn = document.getElementById("modalBtn");
let closeBtn = document.getElementsByClassName("closeBtn")[0];

if (modalBtn) {
  modalBtn.addEventListener('click', openModal);
}
else if (closeBtn) {
  closeBtn.addEventListener('click', closeModal);
}
window.addEventListener('click', clickOutside );

function openModal(){
  modal.style.display = 'block';
}

function closeModal(){
  modal.style.display = 'none';
}

function clickOutside(e){
  if(e.target == modal) {
    modal.style.display = 'none';
  }
}