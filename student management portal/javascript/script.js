// Bootstrap Validation

(() => {

'use strict';

const forms =
document.querySelectorAll('.needs-validation');

Array.from(forms).forEach(form => {

form.addEventListener('submit', event => {

if (!form.checkValidity()) {

event.preventDefault();
event.stopPropagation();

}

form.classList.add('was-validated');

}, false);

});

})();


// Dashboard Search Function

const searchInput =
document.getElementById("searchInput");

if(searchInput){

searchInput.addEventListener("keyup", function(){

let filter =
this.value.toUpperCase();

let rows =
document.querySelectorAll(
"#studentTable tbody tr"
);

rows.forEach(row => {

let text =
row.cells[1].textContent;

row.style.display =
text.toUpperCase().includes(filter)
? ""
: "none";

});

});

}


// Contact Form Alert

const contactForm =
document.getElementById("contactForm");

if(contactForm){

contactForm.addEventListener(
"submit",
function(event){

event.preventDefault();

document
.getElementById("successAlert")
.classList.remove("d-none");

this.reset();

});

}