const homeNav = document.querySelector(".header__home");
const skillsNav = document.querySelector(".header__skills");
const projectsNav = document.querySelector(".header__projects");
const contactNav = document.querySelector(".header__contact");

const homeLoc = document.getElementById("home");
const skillsLoc = document.getElementById("skills");
const projectsLoc = document.getElementById("projects");
const contactLoc = document.getElementById("contact");

let navArr = [homeNav, skillsNav, projectsNav, contactNav];
const clearNavs = () => {
    navArr.forEach(item => {
        item.classList.remove("active");
    });
}

const scrollToLoc = (loc, nav) => {
    loc.scrollIntoView({ behavior: "smooth", block: "start" });
}

const scrollToHome = (nav) => {
    window.scroll({ behavior: "smooth", top: 0 });
}

homeNav.addEventListener("click", () => scrollToHome(homeNav));
skillsNav.addEventListener("click", () => scrollToLoc(skillsLoc, skillsNav));
projectsNav.addEventListener("click", () => scrollToLoc(projectsLoc, projectsNav));
contactNav.addEventListener("click", () => scrollToLoc(contactLoc, contactNav));

let scrollpos = window.scrollY;
let windowWidth = window.innerWidth;

const widthCoordinaresObj = {
    99999: [2000, 1640, 900],
    800: [2300, 1500, 700],
    480: [2850, 2050, 1050]
}

let coordsArr = widthCoordinaresObj["99999"];
if (windowWidth <= 800) {
    coordsArr = widthCoordinaresObj["800"];
} else if (windowWidth <= 480) {
    coordsArr = widthCoordinaresObj["480"];
}

window.addEventListener("resize", () => {
    windowWidth = window.innerWidth;
    if (windowWidth <= 480) {
        coordsArr = widthCoordinaresObj["480"];
    } else if (windowWidth <= 800) {
        coordsArr = widthCoordinaresObj["800"];
    } else {
        coordsArr = widthCoordinaresObj["99999"];
    }
})

window.addEventListener('scroll', function() { 
    scrollpos = window.scrollY;

    clearNavs();
    if (scrollpos >= coordsArr[0]) {
        contactNav.classList.add("active");
    } else if (scrollpos >= coordsArr[1]) {
        projectsNav.classList.add("active");
    } else if (scrollpos >= coordsArr[2]) {
        skillsNav.classList.add("active");
    } else {
        homeNav.classList.add("active");
    }
})