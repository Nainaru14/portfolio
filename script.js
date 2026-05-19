// Smooth scroll for navigation

document.querySelectorAll("nav a").forEach(link => {

link.addEventListener("click", function(e){

e.preventDefault();

const target =
document.querySelector(this.getAttribute("href"));

target.scrollIntoView({
behavior:"smooth"
});

});

});



// Typing animation

const text =
[
"Full Stack Developer",
"Java Developer",
"Software Engineer"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

if(count === text.length){
count = 0;
}

currentText = text[count];

letter = currentText.slice(0, ++index);

document.getElementById("typing")
.innerHTML = letter;

if(letter.length === currentText.length){

count++;

index = 0;

setTimeout(type,1000);

}
else{
setTimeout(type,100);
}

})();




// Fade animation on scroll

const sections =
document.querySelectorAll("section");

window.addEventListener("scroll", ()=>{

sections.forEach(section=>{

const top =
section.getBoundingClientRect().top;

if(top < window.innerHeight-100){

section.classList.add("show");

}

});

});




// Active navbar

const navLinks =
document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current = "";

sections.forEach(section=>{

const sectionTop =
section.offsetTop;

if(pageYOffset >= sectionTop-200){

current =
section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")
.includes(current)){

link.classList.add("active");

}

});

});
