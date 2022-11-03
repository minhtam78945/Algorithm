
var openModal = document.getElementById("btn-modal");
var diagol = document.querySelector(".digalo");
var iconClose = document.querySelector(".digao-header i");
var closeModal = document.querySelector(".btn_modal");
function ToggleModal(e) {
    diagol.classList.toggle("hide");
}
openModal.addEventListener("click", ToggleModal);
iconClose.addEventListener("click", ToggleModal);
closeModal.addEventListener("click", function (e) {
    if (e.target === e.currentTarget) {
        ToggleModal();
    }
});