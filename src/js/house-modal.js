(() => {
  const refs = {
    openModalBtn: document.querySelector("[house-modal-open]"),
    closeModalBtn: document.querySelector("[house-modal-close]"),
    modal: document.querySelector("[house-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();