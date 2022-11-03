
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
    PositionX -= dir * sliderItemsWidth;
    if (index === sliderLength) {

      index = 0;
      PositionX += sliderLength * sliderItemsWidth;
    }
    else if (index === -1) {

      index = sliderLength - 1;
      PositionX -= sliderLength * sliderItemsWidth;
    }
    sliderMain.style = ` transform : translateX(${PositionX}px)`;

    [...prop].forEach(element => element.classList.remove("active"))
    sliderDotitems[index].classList.add("active");
  }
  var timer = setInterval(() => {
    handlechange(1);
  }, 7000);
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
    `<div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
      <div class="modal-header">
      <h5 class="modal-title">Linked List</h5>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
      </button>
  </div>
  <div class="modal-body">
      <div class = " content ">
      <h5>Single Linked List</h5>
      <img src = "https://topdev.vn/blog/wp-content/uploads/2020/10/Single-linked-list-3.png" alt =""/>
      <p><a href="#" role="button" class="btn btn-secondary popover-test" title="Popover title"
              data-content="Popover body content is set in this attribute.">Click here to enter data</a></p>
      </div>
      <div class = " content ">
      <h5>Doubly Linked </h5>
      <img src = "https://chidokun.github.io/images/post/software/doubly-linked-list/1.png" alt =""/>
      <p><a href="#" role="button" class="btn btn-secondary popover-test" title="Popover title"
              data-content="Popover body content is set in this attribute.">Click here to enter data</a></p>
      </div>
      <div class = " content ">
      <h5>Circular Linked List</h5>
      <img src = "https://blog.luyencode.net/wp-content/uploads/2018/12/danh-sach-line-ket-vong.png" alt =""/>
      <p><a href="#" role="button" class="btn btn-secondary popover-test" title="Popover title"
              data-content="Popover body content is set in this attribute.">Click here to enter data</a></p>
      </div>
        </div>
        <div class="modal-footer">
                    <button type="button" class="btn btn-primary">Save changes</button>
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
      </div>
    </div>
  </div>`
  document.body.append(modalWrap);
  var modal = new bootstrap.Modal(modalWrap.querySelector('.modal'));
  modal.show();
}