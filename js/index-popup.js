// Попап "Напишите нам"

var writeUsLink = document.querySelector(".write-us-link");
  
var writeUsPopup = document.querySelector(".modal-write-us");

// Попап напишите нам

var writeUsClose = writeUsPopup.querySelector(".modal-close");
  
var writeUsForm = writeUsPopup.querySelector(".write-us-form");

var name = writeUsPopup.querySelector("[name=name]");

var email = writeUsPopup.querySelector("[name=email]");

var textarea = writeUsPopup.querySelector("[name=letter]");

var isStorageSupport = true;

var storage = "";

try {
storage = localStorage.getItem("name");
} catch (err) {
isStorageSupport = false;
}  

writeUsLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    writeUsPopup.classList.add("modal-show");
});

writeUsClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    writeUsPopup.classList.remove("modal-show");
    writeUsPopup.classList.remove("modal-error");
});

writeUsForm.addEventListener("submit", function (evt) {
    if (!name.value || !email.value || !letter.value) {
      evt.preventDefault();
      writeUsPopup.classList.add("modal-error");
    } else {
      localStorage.setItem("name", name.value);
      localStorage.setItem("email", email.value);
      localStorage.setItem("letter", letter.value);
      writeUsPopup.classList.remove("modal-show");
    }  
});

window.addEventListener("keydown", function (evt) {
if (evt.keyCode === 27) {
  evt.preventDefault();
  if (writeUsPopup.classList.contains("modal-show")) {
    writeUsPopup.classList.remove("modal-show");
    writeUsPopup.classList.remove("modal-error");
  }
}
});

// Попап карты

var mapLink = document.querySelector(".map-small");
  
var mapPopup = document.querySelector(".modal-map");

var mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
if (evt.keyCode === 27) {
  evt.preventDefault();
  if (mapPopup.classList.contains("modal-show")) {
    mapPopup.classList.remove("modal-show");
  }
}
});