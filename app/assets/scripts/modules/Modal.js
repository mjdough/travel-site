import $ from 'jquery';

class Modal {
  constructor() {
    this.openModalButtom = $(".open-modal");
    this.modal = $(".modal");
    this.closeModalButtom = $(".modal__close");
    this.events();
  }

  events() {
    // clicking the open modal button
    this.openModalButton.click(this.openModal.bind(this));
    // clicking the  X close modal button
    this.closeModalButton.click(this.closeModal.bind(this));
    // pushes any key
    $(document).keyup(this.keyPressHandler.bind(this));
  }

  keyPressHandler(e) {
<<<<<<< HEAD
    if (e/keyCode == 27) {
=======
    if (e.keyCode == 27) {
>>>>>>> create-modal
      this.closeModal();
    }
  }

  openModal() {
    this.modal.addClass("modal--is-visible");
    return false;
  }

  closeModal() {
<<<<<<< HEAD
    this.modal.remove("modal--is-visible");
=======
    this.modal.removeClass("modal--is-visible");
>>>>>>> create-modal
  }
}

export default modal;
