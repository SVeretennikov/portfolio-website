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
        item.classList.remove("active")
    });
}

const scrollToLoc = (loc, nav) => {
    loc.scrollIntoView({ behavior: "smooth", block: "start" });
    nav.classList.add("active");
}

const scrollToHome = (nav) => {
    window.scroll({ behavior: "smooth", top: 0 });
    nav.classList.add("active");
}

homeNav.addEventListener("click", () => scrollToHome(homeNav));
skillsNav.addEventListener("click", () => scrollToLoc(skillsLoc, skillsNav));
projectsNav.addEventListener("click", () => scrollToLoc(projectsLoc, projectsNav));
contactNav.addEventListener("click", () => scrollToLoc(contactLoc, contactNav));

let scrollpos = window.scrollY;

window.addEventListener('scroll', function() { 
    scrollpos = window.scrollY;

    clearNavs();
    if (scrollpos >= 2200) {
        contactNav.classList.add("active");
    } else if (scrollpos >= 1600) {
        projectsNav.classList.add("active");
    } else if (scrollpos >= 500) {
        skillsNav.classList.add("active");
    } else {
        homeNav.classList.add("active") 
    }

})