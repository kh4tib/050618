// let deleteBtn = document.querySelectorAll("item__delete");
// let item = document.querySelector("container__item");
let list = document.querySelector(".list__container");

// Delete Item
// Bubbling throught "ul"

list.addEventListener("click", function(ev){
    if (ev.target.className === "item__delete") {
        let li = ev.target.parentElement;
        list.removeChild(li);    
        }
});

// Hide List checkbox

let checkBox = document.querySelector(".checkbox__check");

checkBox.addEventListener("change", function(ev){
    if (checkBox.checked) {
        list.style.display = "none";
    } else {
        list.style.display = "block";
    }
});