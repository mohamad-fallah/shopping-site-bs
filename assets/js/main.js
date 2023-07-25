
var now = new Date().getTime();
var countDownDuration = 10 * 20 * 10 * 60 * 1000; // 365 روز به میلی‌ثانیه
var countDownDate = now + countDownDuration;

var x = setInterval(function() {
    now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    var z = document.getElementsByClassName("demos");
    for (var i = 0; i < z.length; i++) {
        z[i].innerHTML = 
        '<span id="day">' +
        days + 
        "</span>" +
        '<span id="hours">' +
        hours + 
        "</span>" +
        '<span id="minutes">' +
        minutes + 
        "</span>" +
        '<span id="seconds">' +
        seconds + 
        "</span>";
    }                                                                                       
    if (distance < 0) {
        clearInterval(x);
        var y = document.getElementsByClassName("demos");
        for (var i = 0; i < z.length; i++) {
            y[i].innerHTML = "";
        }
        var g = document.getElementsByClassName("after-expire");
        for (var i = 0; i < z.length; i++){
            g[i].classList.add("offer-expire-text");
        } 
        var d = document.getElementsByClassName("offer-expire-text-inner");
        for (var i = 0; i < z.length; i++){
            d[i].innerHTML = "پیشنهاد ویژه این محصول به پایان رسید!";
        } 
        var t = document.getElementsByClassName("offer-blur");
        for (var i = 0; i < z.length; i++){
            t[i].style.filter = "blur(2px)";
        } 
    }
}, 1000);

$('.owl-carousel').owlCarousel({
    rtl:true,
    loop:true,
    margin:0,
    autoplay: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
const popover = new bootstrap.Popover('.popover-dismiss', {
    trigger: 'hover'
  })