document.querySelector(".toggle-settings .fa-gear").onclick = function () {

    this.classList.toggle("fa-spin");

    document.querySelector(".settings-box").classList.toggle("open")
};





let imgs = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg"];

setInterval(() => {
    let changeImgs = imgs[Math.floor(Math.random() * imgs.length)];
    document.querySelector(".landing").style.backgroundImage = 'url("../imgs/' + changeImgs + '")';
}, 6000)
