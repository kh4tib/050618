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

// Add Item to List

let addForm = document.forms["list__add"];

addForm.addEventListener("submit", function(ev){
    ev.preventDefault();
    let value = addForm.querySelector('input[type="text"]').value;

    if (value == "") {
        let foo = prompt("add value");
        value = foo;
    }

    // create elements

    let li = document.createElement("li");
    let inputName = document.createElement("div");
    let deleteBtn = document.createElement("div")

    // elements content
    inputName.textContent = value;
    deleteBtn.textContent = "Delete";

    // append elements

    li.appendChild(inputName);
    li.appendChild(deleteBtn);
    list.appendChild(li);
    
    // adding classes
    li.classList.add("container__item");
    deleteBtn.classList.add("item__delete");
    inputName.classList.add("item__name");
});