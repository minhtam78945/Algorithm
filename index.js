
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

    const handlechange = (dir) => {
      index += dir;
      PositionX -= dir*sliderItemsWidth;
      if (index === sliderLength){
        console.log("index === sliderLength - 1")
        index = 0;
        PositionX += sliderLength * sliderItemsWidth;
      }
      else if (index === -1){
        console.log("index === 0")
        index = sliderLength - 1;
        PositionX -= sliderLength * sliderItemsWidth;
      }
      sliderMain.style = ` transform : translateX(${PositionX}px)`;
      console.log(index);
      [...prop].forEach(element => element.classList.remove("active"))
      sliderDotitems[index].classList.add("active");
    }
    var timer = setInterval(() => {
        handlechange(1);
    }, 3000);
    sliderNext.addEventListener("click", function () {
        clearInterval(timer);
        handlechange(1);
    });
    sliderPrev.addEventListener("click", function () {
        clearInterval(timer);
        handlechange(-1);
    });

};
window.addEventListener("load", handleSilder);
var modalWrap = null;
const Showmodal = () => {
    if (modalWrap !== null) {
        modalWrap.remove();
    }
    modalWrap = document.createElement("div");
    console.log("hai");
    modalWrap.innerHTML = 
    `<div class="modal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>Modal body text goes here.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary">Save changes</button>
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>`
    console.log("hai");
    document.body.append(modalWrap);
    var modal = new bootstrap.Modal(modalWrap.querySelector('.modal'));
    modal.show();
}