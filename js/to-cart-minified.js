var toCartLink=document.querySelector(".buy"),toCartPopup=document.querySelector(".modal-cart-adding"),toCartClose=toCartPopup.querySelector(".modal-close");toCartLink.addEventListener("click",function(t){t.preventDefault(),toCartPopup.classList.add("modal-show")}),toCartClose.addEventListener("click",function(t){t.preventDefault(),toCartPopup.classList.remove("modal-show")}),window.addEventListener("keydown",function(t){27===t.keyCode&&(t.preventDefault(),toCartPopup.classList.contains("modal-show")&&toCartPopup.classList.remove("modal-show"))});