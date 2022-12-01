(() => {
  const refs = {
    openModalBtn: document.querySelector("[download-modal-open]"),
    closeModalBtn: document.querySelector("[download-modal-close]"),
    modal: document.querySelector("[download-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();