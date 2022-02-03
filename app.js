

const links = document.querySelector(".links");
const navToggle = document.querySelector(".nav-toggle");
const topLinks = document.querySelector(".top-link");
const scrollLinks = document.querySelectorAll(".scroll-link");
const socialLinks = document.querySelector(".social-links")

navToggle.addEventListener( "click", function() {
    console.log(links.classlist);
    links.classList.toggle("show-links")
});

// ************** Set Date****************//
const copyrightYear = document.getElementById("date");
copyrightYear.innerHTML = new Date().getFullYear();
// setback to top link 

// **********Countdown Timer*****************
const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

//date Array
const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();
// months are ZERO index based;
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];
const weekday = weekdays[futureDate.getDay()];
const date = futureDate.getDate();
giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`;

const futureTime = futureDate.getTime();
function getRemaindingTime() {
  const today = new Date().getTime();

  const t = futureTime - today;
  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60m
  // 1d = 24hr
  // values in miliseconds
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  // calculate all values
  let days = t / oneDay;
  days = Math.floor(days);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

   // set values array
   const values = [days, hours, minutes, seconds];
   function format(item) {
     if (item < 10) {
       return (item = `0${item}`);
     }
     return item;
   }
 
   items.forEach(function (item, index) {
     item.innerHTML = format(values[index]);
   });
 
   if (t < 0) {
     clearInterval(countdown);
     deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`;
   }
 }
 // countdown;
 let countdown = setInterval(getRemaindingTime, 1000);
 //set initial values
 getRemaindingTime();

//  ******************top-link*************

const topLink = document.querySelector(".top-link");
const navbar = document.getElementById("nav");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  // setup back to top link

  if (scrollHeight > 500) {
    console.log("helo");

    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

const getElement = (selection) => {
  const element = document.querySelector(selection);

  if (element)
    return element;
    
  throw new Error (
    `please check "${selection}" selector, no such element exist`
  );
}

// Cart     
const cartOverlay = getElement('.cart-overlay');
const closeCartBtn = getElement('.cart-close');
const toggleCartBtn = getElement('.toggle-cart');
const productCartBtnList = [...document.querySelectorAll('.product-cart-btn')];

toggleCartBtn.addEventListener('click', () => {
  console.log("baby");
  cartOverlay.classList.add('show');
});
closeCartBtn.addEventListener('click', () => {
  cartOverlay.classList.remove('show');
});
productCartBtnList.forEach((btn) => {
  btn.addEventListener('click', () => {
    cartOverlay.classList.add('show');
  });
});

// const singleProductAddToCartBtn = getElement('.addToCartBtn');

// singleProductAddToCartBtn.addEventListener('click', () => {
//   cartOverlay.classList.add('show');
// });


 
