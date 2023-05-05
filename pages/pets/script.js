// ---- Creating 48-items array for pagination ----
let petArray = [0, 1, 2, 3, 4, 5, 6, 7];

function randomCheck(arg) {
    for (i = 1; i < 5; i++) {
        if (petArray[petArray.length - i] == arg) {
            return false;
        }
    }
    return true;
}

function createArray() {
    let tempArray = [0, 1, 2, 3, 4, 5, 6, 7];
    let randomNumber = 0; 
    let arg = 0;
    for (let i = 0; i < 8; i++) {
        do {
            randomNumber = Math.floor(Math.random() * tempArray.length);
            arg = tempArray[randomNumber];
        } while (!randomCheck(arg));
        petArray.push(arg);
        tempArray.splice(randomNumber, 1);
    }
}

for (let i = 0; i < 5; i++) {
    createArray();
}


// ------------------ Pagination ------------------

const items = Array.from(document.querySelectorAll(".ourpets__main div")).filter(s =>
   window.getComputedStyle(s).getPropertyValue('display') != 'none');
const pages = 48 / items.length;
var currentPage = 1;
const startPage = document.querySelector(".firstbut");
const beforePage = document.querySelector(".secondbut");
const page = document.querySelector(".zerobut")
const afterPage = document.querySelector(".thirdbut");
const endPage = document.querySelector(".fourthbut");

startPage.addEventListener('click', () => {
    currentPage = 1;
    pageCreate();
    startPage.classList.remove("activebutton");
    beforePage.classList.remove("activebutton");
    afterPage.classList.add("activebutton");
    endPage.classList.add("activebutton");
});

beforePage.addEventListener('click', () => {
    currentPage -= 1;
    if (currentPage <= 1) {
        currentPage = 1;
        startPage.classList.remove("activebutton");
        beforePage.classList.remove("activebutton");
    };
    pageCreate ();
    afterPage.classList.add("activebutton");
    endPage.classList.add("activebutton");
});

afterPage.addEventListener('click', () => {
    currentPage += 1;
    if (currentPage >= pages) {
        currentPage = pages;
        afterPage.classList.remove("activebutton");
        endPage.classList.remove("activebutton");
    };
    startPage.classList.add("activebutton");
    beforePage.classList.add("activebutton");
    pageCreate();
});

endPage.addEventListener('click', () => {
    currentPage = pages;
    pageCreate();
    afterPage.classList.remove("activebutton");
    endPage.classList.remove("activebutton");
    startPage.classList.add("activebutton");
    beforePage.classList.add("activebutton");
});

function pageCreate() {
    page.innerHTML = currentPage;
    for (let i = 0; i < items.length; i++) {
        let petNumber = petArray[(currentPage - 1) * items.length + i];
        names[i].innerHTML = ourPets[petNumber]["name"];
        imgs[i].src = ourPets[petNumber]["img"];
    }
}

document.addEventListener('DOMContentLoaded', function() {
   page.innerHTML = currentPage;
    for (let i = 0; i < items.length; i++) {
        let petNumber = petArray[(currentPage - 1) * items.length + i];
        names[i].innerHTML = ourPets[petNumber]["name"];
        imgs[i].src = ourPets[petNumber]["img"];
    }
}, false);

// ----------------- Modal Window -----------------
const modalOpen = items;
const modalBody = document.querySelector(".modal");
const modalClose = document.querySelector(".modal__close")
const names = Array.from(document.querySelectorAll(".ourpets__main p")).filter(s =>
   window.getComputedStyle(s).getPropertyValue('display') != 'none');
const imgs = Array.from(document.querySelectorAll(".ourpets__main img")).filter(s =>
   window.getComputedStyle(s).getPropertyValue('display') != 'none');
const body = document.body;

for (let index = 0; index < modalOpen.length; index++) {
    modalOpen[index].addEventListener("click", () => {

        let petNum = 0;
        let petName = names[index].innerHTML;

        for (let b = 0; b < 8; b++) {
            if (petName === ourPets[b]["name"]) {petNum = b}
        }
        petName = '';

        document.querySelector(".modal img").src = ourPets[petNum]["img"];
        document.querySelector(".modal h3").innerHTML = ourPets[petNum]["name"];
        document.querySelector(".modal h4").innerHTML = ourPets[petNum]["type"] + " - " + ourPets[petNum]["breed"];
        document.querySelector(".modal p").innerHTML = ourPets[petNum]["description"];
        document.querySelector(".age").innerHTML = '<b>Age: </b>' + ourPets[petNum]["age"];
        document.querySelector(".inoculations").innerHTML = '<b>Inoculations: </b>' + ourPets[petNum]["inoculations"];
        document.querySelector(".diseases").innerHTML = '<b>Diseases: </b>' + ourPets[petNum]["diseases"];
        document.querySelector(".parasites").innerHTML = '<b>Parasites: </b>' + ourPets[petNum]["parasites"];
        body.classList.toggle("noscroll");
        modalBody.classList.remove("modal__vis");
    });
}
modalClose.addEventListener("click", () => {
    modalBody.classList.add("modal__vis");
    body.classList.toggle("noscroll");
});
modalBody.addEventListener('click', (e) => {
  let clickInside = e.target.nodeName;
  if (clickInside === 'DIV') {
     modalBody.classList.add("modal__vis")
     body.classList.toggle("noscroll");
  }
})

// -------------------- Burger --------------------


const burgerToggle = document.querySelector(".burger");
const burgerMenu = document.querySelector(".burger__menu");
const logo = document.querySelector(".logo");
const burgerLinks = document.querySelectorAll(".burger__menu a");

burgerToggle.addEventListener("click", () => {
    burgerMenu.classList.remove("burger_vis");
    burgerMenu.style.setProperty("right", "0");
    logo.style.setProperty("position", "fixed");
    body.classList.add("noscroll");
    if (burgerToggle.style.position === "relative") {
        burgerToggle.style.removeProperty('position');
        burgerToggle.classList.remove("burger__rotation");
        burgerMenu.classList.add("burger_vis");
        logo.style.removeProperty('position');
        body.classList.remove("noscroll");
        burgerMenu.style.setProperty("right", "-100%");
    } else {
        burgerToggle.style = "position: relative;";
        body.classList.add("noscroll");
        burgerToggle.classList.add("burger__rotation");
    }
});

logo.addEventListener("click", () => {
    burgerMenu.classList.add("burger_vis");
    logo.style.removeProperty('position');
    burgerToggle.style.removeProperty('position');
    body.classList.remove("noscroll");
    burgerMenu.style.setProperty("right", "-100%");
    burgerToggle.classList.remove("burger__rotation");
});

const links = Array.from(burgerMenu.children);

links.forEach((link) => {
  link.addEventListener("click", () => {
    burgerMenu.classList.add("burger_vis");
    logo.style.removeProperty('position');
    burgerToggle.style.removeProperty('position');
    body.classList.remove("noscroll");
    burgerMenu.style.setProperty("right", "-100%");
    burgerToggle.classList.remove("burger__rotation");
  });
});