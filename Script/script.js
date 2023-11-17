/* VENTANA MODAL */

    const openModal = document.querySelector(".contacto");
    const modal = document.querySelector(".modal");
    const closeModal = document.querySelector(".modal_close");

    /* Evento click para abrir la ventana modal */
    openModal.addEventListener("click", (e) => {
        e.preventDefault();
        modal.classList.add("modal--show");
    })

    /* Evento click para cerrar la ventana modal */
    closeModal.addEventListener("click", (e) => {
        e.preventDefault();
        modal.classList.remove("modal--show");
    })


  