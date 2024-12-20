// // /////// selecting elements
// // console.log(document.documentElement);
// // console.log(document.head);
// // console.log(document.body);
// // const header = document.querySelector(".header");
// // const allsections = document.querySelectorAll("section");
// // console.log(allsections);
// // document.getElementById("section--1");
// // const allButtons = document.getElementsByTagName("button");
// // console.log(allButtons);
// // console.log(document.getElementsByClassName("btn"));
// // /////// creating and inseting elements
// // const message = document.createElement("div");
// // message.classList.add("cookie-message");
// // // message.textContent = `we use cooked for improved functionality and analytics.`;
// // message.innerHTML = `We use cooked for improved functionality and analytics.
// // <button class="btn btn--close-cookie">Got it!</button>`;
// // header.append(message);
// // // header.prepend(message);
// // // header.append(message.cloneNode(true));
// // // header.before(message);
// // // header.after(message);
// // // / delete element ////////
// // document
// //   .querySelector(".btn--close-cookie")
// //   .addEventListener("click", function () {
// //     message.remove();
// //   });
// // message.style.background = "#37383d";
// // message.style.width = "1255px";
// // console.log(getComputedStyle(message).width);
// // message.style.height =
// //   Number.parseFloat(getComputedStyle(message).height, 10) + 15 + "px";
// // document.documentElement.style.setProperty("--color-primary", "orangered");
// // //////////// Attributes
// // const logo = document.querySelector(".nav__logo");
// // console.log(logo.src);
// // console.log(logo.alt);
// // console.log(logo.className);
// // console.log(logo.getAttribute("desiner"));
// // // logo.src = "./img/grow-lazy.jpg";
// // ////////////// Data attribute///////////
// // console.log(logo.dataset.versionNumber);
// // /////////// classes
// // logo.classList.add("c", "j", "l");
// // logo.classList.remove("c");
// // logo.classList.toggle("c");
// // logo.classList.contains("c");

// // // const s1coords = section1.getBoundingClientRect();
// // // window.scrollTo({
// // //   left: s1coords.left + window.scrollX,
// // //   top: s1coords.top + window.scrollY,
// // //   behavior: "smooth",
// // // });
// // const h1 = document.querySelector("h1");
// // const alertH1 = function (e) {
// //   alert(`addEventListener: Great! you are reading the heading :D`);
// //   h1.removeEventListener("mouseenter", alertH1);
// // };
// // h1.addEventListener("mouseenter", alertH1);
// // // setTimeout(() => h1.removeEventListener("mouseenter", alertH1), 1000);

// ////////////////// going downwards: child
// const h1 = document.querySelector("h1");
// console.log(h1.querySelectorAll(".highlight"));
// console.log(h1.childNodes);
// console.log(h1.children);
// h1.firstElementChild.style.color = `white`;
// h1.lastElementChild.style.color = `white`;
// ////////////////// going Upwards: child
// console.log(h1.parentNode);
// console.log(h1.parentElement);
// h1.closest(".header").style.background = `var(--gradient-primary)`;
// h1.closest("h1").style.background = `var(--gradient-secondary)`;
// ////////// sibilings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);
// console.log(h1.previousSibling);
// console.log(h1.nextSibling);
// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function (el) {
//   el.style.transform = `rotate(0deg)`;
//   if (el === document.querySelector(".btn--text")) {
//     el.style.color = "black";
//   }
//   console.log(el);
// });
// const nav = document.querySelector(".nav");
////////// 1 version/////////////////////
// nav.addEventListener("mouseover", function (e) {
//   if (e.target.classList.contains("nav__link")) {
//     const link = e.target;
//     const sibilings = link.closest(".nav").querySelectorAll(".nav__link");
//     const logo = link.closest(".nav").querySelector("img");
//     sibilings.forEach((el) => {
//       if (el !== link) el.style.opacity = 0.5;
//     });
//     logo.style.opacity = 0.5;
//   }
// });
// nav.addEventListener("mouseout", function (e) {
//   if (e.target.classList.contains("nav__link")) {
//     const link = e.target;
//     const sibilings = link.closest(".nav").querySelectorAll(".nav__link");
//     const logo = link.closest(".nav").querySelector("img");
//     sibilings.forEach((el) => {
//       if (el !== link) el.style.opacity = 1;
//     });
//     logo.style.opacity = 1;
//   }
// });
////////// 2 version/////////////////////
// const handleHover = function (e, opacity) {
//   if (e.target.classList.contains("nav__link")) {
//     const link = e.target;
//     const sibilings = link.closest(".nav").querySelectorAll(".nav__link");
//     const logo = link.closest(".nav").querySelector("img");
//     sibilings.forEach((el) => {
//       if (el !== link) el.style.opacity = opacity;
//     });
//     logo.style.opacity = opacity;
//   }
// };

// nav.addEventListener("mouseover", function (e) {
//   handleHover(e, 0.5);
// });
// nav.addEventListener("mouseout", function (e) {
//   handleHover(e, 1);
// });
////////// 3 version/////////////////////
const handleHover = function (e) {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const sibilings = link.closest(".nav").querySelectorAll(".nav__link");
    const logo = link.closest(".nav").querySelector("img");
    sibilings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

nav.addEventListener("mouseover", handleHover.bind(0.5));
nav.addEventListener("mouseout", handleHover.bind(1));
const obsCallback = function (entries, obsever) {
  entries.forEach((entry) => console.log(entry));
};
const obsOptions = {
  root: null,
  threshold: 0,
};

const obsever = new IntersectionObserver(obsCallback, obsOptions);
obsever.observe(section1);
