rotatingTabStatus = function (elementID, multiple) {

const mouseOverContainer = document.getElementsByTagName("body")[0];
const element = document.getElementById(elementID);
var r = document.querySelector(':root');


function transformElement(x, y) {
    let box = element.getBoundingClientRect();
    const calcX = -(y - box.y - box.height / 2) / 1000;
    const calcY = (x - box.x - box.width / 2) / 1000;
    const percentage = parseInt((x - box.x) / box.width * 1000) / 10;
    
    element.style.transform = "rotateX(" + calcX + "deg)" + "rotateY(" + calcY + "deg)";

    r.style.setProperty('--transform-x', '-' + calcXtool + 'deg')
    r.style.setProperty('--transform-y', '-' + calcYtool + 'deg')

    document.querySelectorAll('.mytooltiptext').forEach(el => {
        el.style.transform = "rotateX(-" + calcX + "deg)" + "rotateY(-" + calcY + "deg)";
        el.style.transform = "rotateX(-" + calcX + "deg)" + "rotateY(-" + calcY + "deg)";
    });

    
}

mouseOverContainer.addEventListener("mousemove", (e) => {
    window.requestAnimationFrame(function () {
        transformElement(e.clientX, e.clientY);
    });
});

mouseOverContainer.addEventListener("mouseleave", (e) => {
    window.requestAnimationFrame(function () {
        element.style.transform = "rotateX(0) rotateY(0)";
    });
});



}

rotatingTabStatusRight = function (elementID, multiple) {

const mouseOverContainer = document.getElementsByTagName("body")[0];
const element = document.getElementById(elementID);

function transformElement(x, y) {
    let box = element.getBoundingClientRect();
    const calcX = -(y - box.y - box.height / 2) / 100;
    const calcY = -(x - box.x - box.width / 2) / multiple;
    const percentage = parseInt((x - box.x) / box.width * 1000) / 10;
    
    element.style.transform = "rotateX(" + calcX + "deg)" + "rotateY(" + calcY + "deg)";
}

mouseOverContainer.addEventListener("mousemove", (e) => {
    window.requestAnimationFrame(function () {
        transformElement(e.clientX, e.clientY);
    });
});

mouseOverContainer.addEventListener("mouseleave", (e) => {
    window.requestAnimationFrame(function () {
        element.style.transform = "rotateX(0) rotateY(0)";
    });
});



}

rotatingTabY = function (elementID, multiple) {

const mouseOverContainer = document.getElementsByTagName("body")[0];
const element = document.getElementById(elementID);

function transformElement(x, y) {
    let box = element.getBoundingClientRect();
    const calcX = -(y - box.y - box.height / 2) / multiple;
    const calcY = (x - box.x - box.width / 2) / multiple;
    const percentage = parseInt((x - box.x) / box.width * 1000) / 10;
    
    element.style.transform = "rotateX(" + calcX + "deg)" + "rotateY(" + calcY + "deg)";
}

mouseOverContainer.addEventListener("mousemove", (e) => {
    window.requestAnimationFrame(function () {
        transformElement(e.clientX, e.clientY);
    });
});

mouseOverContainer.addEventListener("mouseleave", (e) => {
    window.requestAnimationFrame(function () {
        element.style.transform = "rotateX(0) rotateY(0)";
    });
});

}

rotatingTabXY = function (elementID, multiple) {

const mouseOverContainer = document.getElementsByTagName("body")[0];
const element = document.getElementById(elementID);

function transformElement(x, y) {
    let box = element.getBoundingClientRect();
    const calcX = -(y - box.y - box.height / 2) / multiple;
    const calcY = (x - box.x - box.width / 2) / multiple;
    const percentage = parseInt((x - box.x) / box.width * 1000) / 10;
    
    element.style.transform = "rotateX(" + calcX + "deg)" + "rotateY(" + calcY + "deg)";
}

mouseOverContainer.addEventListener("mousemove", (e) => {
    window.requestAnimationFrame(function () {
        transformElement(e.clientX, e.clientY);
    });
});

mouseOverContainer.addEventListener("mouseleave", (e) => {
    window.requestAnimationFrame(function () {
        element.style.transform = "rotateX(0) rotateY(0)";
    });
});

}

movabletab = function (windowID) {
    let container = document.getElementById(windowID);
    let body = document.querySelector('body');

    container.addEventListener('mousedown', (e) => {
    isMouseDown = true;
    let x = e.clientX - container.offsetLeft;
    let y = e.clientY - container.offsetTop;

    window.addEventListener('mousemove', (e) => {
        if (isMouseDown) {
            container.style.setProperty('left', `${e.clientX - x}px`);
            container.style.setProperty('top', `${e.clientY - y}px`);
        }
    });

    container.addEventListener('mouseup', () => {
        isMouseDown = false;
    });
});
}


nametabchange = function () {
            var elem = document.getElementById("main_tab");
        if (elem.value=="You") {
            elem.value = "Batman";
        } else elem.value = "You";

}