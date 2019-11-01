var toCartLink = document.querySelector(".buy");
  
var toCartPopup = document.querySelector(".modal-cart-adding");

var toCartClose = toCartPopup.querySelector(".modal-close");

toCartLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    toCartPopup.classList.add("modal-show");
});

toCartClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    toCartPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
if (evt.keyCode === 27) {
  evt.preventDefault();
  if (toCartPopup.classList.contains("modal-show")) {
    toCartPopup.classList.remove("modal-show");
  }
}
});