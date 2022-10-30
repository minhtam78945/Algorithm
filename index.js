
const slider = document.querySelector(".slider");
const sliderMain = document.querySelector(".slider-main");
const sliderNext = document.querySelector(".slider-next");
const sliderPrev = document.querySelector(".slider-prev");
const sliderItems = document.querySelectorAll(".slider-item");
const sliderDotitems = document.querySelectorAll(".slider-dot-item");
const sliderItemsWidth = sliderItems[0].offsetWidth;
const sliderLength = sliderItems.length;
let index = 0;
let PositionX = 0;
const handleSilder = () => {
    const handlechange = (dir) => {
        if (dir === 1) {
            if (index >= sliderLength - 1) {
                index = sliderLength - 1;
                return;
            }
            PositionX -= sliderItemsWidth;
            sliderMain.style = ` transform : translateX(${PositionX}px)`;
            index++;
        }
        else if (dir === -1) {
            if (index <= 0) {
                index = 0;
                return;
            }
            PositionX += sliderItemsWidth;
            sliderMain.style = ` transform : translateX(${PositionX}px)`;
            index--;
        }
        [...prop].forEach(element => element.classList.remove("active"))
        sliderDotitems[index].classList.add("active");
    }
    var timer = setInterval(() => {
        handlechange(1);
    }, 3000)
    sliderNext.addEventListener("click", function () {
        handlechange(1);
    });
    sliderPrev.addEventListener("click", function () {
        handlechange(-1);
    });
    //Toan tu Prop
    const prop = sliderDotitems;
    [...prop].forEach(item => (

        item.addEventListener("click", function (e) {
            [...prop].forEach(element => element.classList.remove("active"))
            e.target.classList.add("active");
            const sildeIndex = parseInt(e.target.dataset.index);
            index = sildeIndex;
            PositionX = -1 * index * sliderItemsWidth;
            sliderMain.style = ` transform : translateX(${PositionX}px)`;
        })
    ))
};
window.addEventListener("load", handleSilder);