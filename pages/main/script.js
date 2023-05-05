// consts for carousel
const rewind = document.querySelectorAll('.rewind');
const names = document.querySelectorAll(".ourpets__main p");
const imgs = document.querySelectorAll(".ourpets__main img");
let petsrandom = [];
let petsrandom2 = [];
let r = 0;


for (let i = 0; i < rewind.length; i++) {
    rewind[i].addEventListener("click", () => {
        for (let n = 0; n < names.length; n++) {
            for (let m = 0; m < ourPets.length; m++) {
                if (names[n].innerHTML === ourPets[m]["name"]) {petsrandom += m}
            }
        }

        for (let z = 0; z < petsrandom.length; z++) {
            do {
               r = Math.floor(Math.random() * 8);
            } while (petsrandom.includes(r) || petsrandom2.includes(r));
            petsrandom2 += r;
        }
        for (let n = 0; n < names.length; n++) {
            names[n].innerHTML = ourPets[petsrandom2[n]]["name"]
            imgs[n].src = ourPets[petsrandom2[n]]["img"];
        }
        petsrandom = [];
        petsrandom2 = [];
    });
}


// ----------------- Modal Window -----------------


const modalOpen = Array.from(document.querySelectorAll(".ourpets__main div")).filter(s =>
   window.getComputedStyle(s).getPropertyValue('display') != 'none');
const modalBody = document.querySelector(".modal");
const modalClose = document.querySelector(".modal__close")
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

// ----------------- Burger -----------------


const burgerToggle = document.querySelector(".burger");
const burgerMenu = document.querySelector(".burger__menu");
const logo = document.querySelector(".logo");
const article = document.querySelector(".start__txt");
const burgerLinks = document.querySelectorAll(".burger__menu a");

burgerToggle.addEventListener("click", () => {
    burgerMenu.classList.remove("burger_vis");
    burgerMenu.style.setProperty("right", "0");
    article.classList.add("start__txt__pad");
    logo.style.setProperty("position", "fixed");
    body.classList.add("noscroll");
    if (burgerToggle.style.position === "relative") {
        burgerToggle.style.removeProperty('position');
        burgerToggle.classList.remove("burger__rotation");
        burgerMenu.classList.add("burger_vis");
        logo.style.removeProperty('position');
        body.classList.remove("noscroll");
        burgerMenu.style.setProperty("right", "-100%");
        article.classList.remove("start__txt__pad");
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
    article.classList.remove("start__txt__pad");
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
    article.classList.remove("start__txt__pad");
    burgerToggle.classList.remove("burger__rotation");
  });
});