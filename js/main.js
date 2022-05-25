// check if there's local storage color option
let mainColors = localStorage.getItem("color_option");

if (mainColors !== null) {

    document.documentElement.style.setProperty('--main-color', mainColors)

    document.querySelectorAll(".colors-list li").forEach(el => {
        el.classList.remove("active");
        if (el.dataset.color === mainColors) {
            el.classList.add("active")
        }
    })
}

let backgroundOption = true;
let backgroundInterval;

let backgLocalItem = localStorage.getItem("background-option");
if (backgLocalItem !== null) {
    if (backgLocalItem === "true") {
    backgroundOption = true;
    } else {
    backgroundOption = false;
    }

    document.querySelectorAll(".random-backgrounds span").forEach(el => {
        el.classList.remove("active");
    });
    if (backgLocalItem === "true") {
        document.querySelector(".random-backgrounds .yes").classList.add("active");
    }else {
        document.querySelector(".random-backgrounds .no").classList.add("active");
        document.querySelector(".landing").style.backgroundImage = localStorage.getItem("background-img");
    }
}
// toggle gear

document.querySelector(".toggle-settings .fa-gear").onclick = function () {

    this.classList.toggle("fa-spin");

    document.querySelector(".settings-box").classList.toggle("open")
};
// switch color
const colorsli = document.querySelectorAll(".colors-list li");
colorsli.forEach(li => {

    li.addEventListener("click", (e) => {
        document.documentElement.style.setProperty('--main-color', e.target.dataset.color)
        localStorage.setItem("color_option", e.target.dataset.color)
        e.target.parentElement.querySelectorAll(".active").forEach(ele => {
            ele.classList.remove("active");
        })
        e.target.classList.add("active")
    })

})


// switch random backgrounds
let randomBackEl = document.querySelectorAll(".random-backgrounds span");
randomBackEl.forEach(span => {

    span.addEventListener("click", (e) => {
        e.target.parentElement.querySelectorAll(".active").forEach(ele => {
            ele.classList.remove("active");
        })
        e.target.classList.add("active");
        if (e.target.dataset.background === 'yes') {
            backgroundOption = true;
            randmizeImgs()
            localStorage.setItem("background-option", true);
        } else {
            backgroundOption = false;
            clearInterval(backgroundInterval)
            localStorage.setItem("background-option", false)
            localStorage.setItem("background-img", document.querySelector(".landing").style.backgroundImage);
        }
    })

})
// landing page element
let imgs = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg"];


function randmizeImgs() {
    if (backgroundOption === true) {
    backgroundInterval = setInterval(() => {
    let changeImgs = imgs[Math.floor(Math.random() * imgs.length)];
    document.querySelector(".landing").style.backgroundImage = 'url("imgs/' + changeImgs + '")';
        }, 1000)
    }
}
randmizeImgs();
// end landing imgs 
// start skills selector
let ourSkills = document.querySelector(".skills");

window.onscroll = function () {
    
let skillsOffsetTop = ourSkills.offsetTop;

let skillsOuterHeight = ourSkills.offsetHeight;

let windowHeight = this.innerHeight;

let windowScrollTop = this.pageYOffset;


if (windowScrollTop + 200 > (skillsOffsetTop + skillsOuterHeight - windowHeight)) {
    let allSkills = document.querySelectorAll(".skills-box .skill-progress span");
    
    allSkills.forEach(skill => {
    
        
        skill.style.width = skill.dataset.progress;
    
    })
}
    
}