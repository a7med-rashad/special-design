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

// toggle gear

document.querySelector(".toggle-settings .fa-gear").onclick = function () {

    this.classList.toggle("fa-spin");

    document.querySelector(".settings-box").classList.toggle("open")
};
// switch color
const colorsli = document.querySelectorAll(".colors-list li");
colorsli.forEach(li => {

    li.addEventListener("click", (e) => {
        console.log(e.target.dataset.color);
        document.documentElement.style.setProperty('--main-color', e.target.dataset.color)
        localStorage.setItem("color_option", e.target.dataset.color)
        localStorage.setItem("classactive", "active")
        e.target.parentElement.querySelectorAll(".active").forEach(ele => {
            ele.classList.remove("active");
        })
        e.target.classList.add("active")
    })

})
console.log(colorsli);
// landing page element
let imgs = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg"];

setInterval(() => {
    let changeImgs = imgs[Math.floor(Math.random() * imgs.length)];
    document.querySelector(".landing").style.backgroundImage = 'url("imgs/' + changeImgs + '")';
}, 5000)
