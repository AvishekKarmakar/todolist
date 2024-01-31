let inputs = document.getElementById("inp");
let text = document.querySelector(".text");

function Add() {
    if (inputs.value == "") {
        alert("Add Task First.");
    } else {
        let newEle = document.createElement("ul");
        newEle.innerHTML = `
            <li>
                <span contenteditable="true">${inputs.value}</span>
                <span class="material-symbols-outlined edit-icon" onclick="Edit(this)">&#9998;</span>
                <span class="material-symbols-outlined delete-icon" onclick="Delete(this)">&#128465;</span>
            </li>`;
        text.appendChild(newEle);
        inputs.value = "";
    }
}

function Edit(element) {
    let textElement = element.parentElement.querySelector('span[contenteditable="true"]');
    textElement.focus();
}

function Delete(element) {
    element.parentElement.remove();
}
