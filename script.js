const ToggleBtn = document.querySelector('.navbar--toggle')
const ToggleMenu = document.querySelector('.navbar--bottom')
// const ToogleIcon = document.querySelector('.navbar--toggle > img')

const AdvertBlock = document.querySelector('.advertisment--block')
const AdvertBtn = document.querySelector('.close--advertisment')

ToggleBtn.addEventListener('click',()=>{
    ToggleMenu.classList.toggle('active--menu')
})

AdvertBtn.addEventListener('click', ()=>{
    AdvertBlock.style.display = "none"
})

$(".play--1").click(function () {
    $(".vid--1")[0].src += "?autoplay=1";
    $(".vid--1").show();
  });
  $(".play--2").click(function () {
    $(".vid--2")[0].src += "?autoplay=1";
    $(".vid--2").show();
  });
  $(".play--3").click(function () {
    $(".vid--3")[0].src += "?autoplay=1";
    $(".vid--3").show();
  });