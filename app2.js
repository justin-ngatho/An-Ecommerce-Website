

const links = document.querySelector(".links");
const navToggle = document.querySelector(".nav-toggle");
const topLinks = document.querySelector(".top-link");
const scrollLinks = document.querySelectorAll(".scroll-link");
const socialLinks = document.querySelector(".social-links")

navToggle.addEventListener( "click", function() {
    console.log(links.classlist);
    links.classList.toggle("show-links")
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