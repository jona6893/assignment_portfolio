"use strict";
import {
  animate,
  scroll,
  timeline,
  inView,
  ScrollOffset,
} from "https://cdn.skypack.dev/motion";

const header1 = document.querySelector(".header_image1");
const header2 = document.querySelector(".header_image2");
const header3 = document.querySelector(".header_image3");
const header4 = document.querySelector("#learnt");
const text1 = document.querySelector(".text1");
const text2 = document.querySelector(".text2");
const text3 = document.querySelector(".text3");
const text4 = document.querySelector(".text4");
const content1 = document.querySelector(".content1");
const content2 = document.querySelector(".content2");
const content3 = document.querySelector(".content3");
const content4 = document.querySelector(".content4");


let sequence1 = [
  [text1, { transform: "scale(1.2)", color: "var(--orange)" }],
  [text2, { transform: "scale(1)", color: "var(--white)" }],
  [text3, { transform: "scale(1)", color: "var(--white)" }],
];
let sequence2 = [
  [text1, { transform: "scale(1)", color: "var(--white)" }],
  [text2, { transform: "scale(1.2)", color: "var(--orange)" }],
  [text3, { transform: "scale(1)", color: "var(--white)" }],

];
let sequence3 = [
  [text1, { transform: "scale(1)", color: "var(--white)" }],
  [text2, { transform: "scale(1)", color: "var(--white)" }],
  [text3, { transform: "scale(1.2)", color: "var(--orange)" }],
];

let windowWidth;

document.addEventListener("DOMContentLoaded", () =>{
  ready()
});



function ready() {

  
  // checks of on mobile or desktop
  if (window.innerWidth > 884) {
    console.log("window is larger");
    //* Content of Each Section when scrolling to the corrent sections

    scroll(animate(content1, { opacity: [0, 1, 1, 0] }), {
      target: content1,
      offsets: [...ScrollOffset.Enter, ...ScrollOffset.Exit],
    });
    scroll(animate(content2, { opacity: [0, 1, 1, 0] }), {
      target: content2,
      offsets: [...ScrollOffset.Enter, ...ScrollOffset.Exit],
    });
    scroll(animate(content3, { opacity: [0, 1, 1, 0] }), {
      target: content3,
      offsets: [...ScrollOffset.Enter, ...ScrollOffset.Exit],
    });
    scroll(animate(content4, { opacity: [0, 1, 1, 0] }), {
      target: content4,
      offsets: [...ScrollOffset.Enter, ...ScrollOffset.Exit],
    });

    //* MenuOptions when scrolling to the corrent sections

    scroll(
      animate(text1, {
        transform: ["scale(1)", "scale(1.08)", "scale(1.08)", "scale(1)"],
        color: [
          "var(--white)",
          "var(--orange)",
          "var(--orange)",
          "var(--white)",
        ],
      }),
      {
        target: content1,
        offsets: [...ScrollOffset.Enter, ...ScrollOffset.Exit],
      }
    );
    scroll(
      animate(text2, {
        transform: ["scale(1)", "scale(1.08)", "scale(1.08)", "scale(1)"],
        color: [
          "var(--white)",
          "var(--orange)",
          "var(--orange)",
          "var(--white)",
        ],
      }),
      {
        target: content2,
        offsets: [...ScrollOffset.Enter, ...ScrollOffset.Exit],
      }
    );
    scroll(
      animate(text3, {
        transform: ["scale(1)", "scale(1.08)", "scale(1.08)", "scale(1)"],
        color: [
          "var(--white)",
          "var(--orange)",
          "var(--orange)",
          "var(--white)",
        ],
      }),
      {
        target: content3,
        offsets: [...ScrollOffset.Enter, ...ScrollOffset.Exit],
      }
    );
    scroll(
      animate(text4, {
        transform: ["scale(1)", "scale(1.08)", "scale(1.08)", "scale(1)"],
        color: [
          "var(--white)",
          "var(--orange)",
          "var(--orange)",
          "var(--white)",
        ],
      }),
      {
        target: content4,
        offsets: [...ScrollOffset.Enter, ...ScrollOffset.Exit],
      }
    );
    

    const socialFloat = document.querySelector("#head");
    const footer = document.querySelector("footer");

    function checkOffset() {
      console.log("change fixed to absolute")
      function getRectTop(el) {
        var rect = el.getBoundingClientRect();
        return rect.top;
      }

      if (
        getRectTop(socialFloat) +
          document.body.scrollTop +
          socialFloat.offsetHeight >=
        getRectTop(footer) + document.body.scrollTop - 10
      ) {
        socialFloat.style.position = "absolute";
        socialFloat.style.top = "300%";}
      if (
        document.body.scrollTop + window.innerHeight <
        getRectTop(footer) + document.body.scrollTop
      ) {
        socialFloat.style.position = "fixed"; // restore when you scroll up
        socialFloat.style.top = "0";}
      //socialFloat.innerHTML = document.body.scrollTop + window.innerHeight;
    }

    document.addEventListener("scroll", function () {
      checkOffset();
    });



  } else {
    scroll(animate(".progress", { scaleX: [0, 1] }));
    console.log("on mobile");

    //* MenuOptions when scrolling to the corrent sections

    scroll(
      animate(text1, {
        transform: ["scale(0.7)", "scale(1.08)", "scale(1.08)", "scale(0.7)"],
        color: [
          "var(--white)",
          "var(--orange)",
          "var(--orange)",
          "var(--white)",
        ],
      }),
      {
        target: header1,
        offsets: [...ScrollOffset.Enter, ...ScrollOffset.Exit],
      }
    );
    scroll(
      animate(text2, {
        transform: ["scale(0.7)", "scale(1.08)", "scale(1.08)", "scale(0.7)"],
        color: [
          "var(--white)",
          "var(--orange)",
          "var(--orange)",
          "var(--white)",
        ],
      }),
      {
        target: header2,
        offsets: [...ScrollOffset.Enter, ...ScrollOffset.Exit],
      }
    );
    scroll(
      animate(text3, {
        transform: ["scale(0.7)", "scale(1.08)", "scale(1.08)", "scale(0.7)"],
        color: [
          "var(--white)",
          "var(--orange)",
          "var(--orange)",
          "var(--white)",
        ],
      }),
      {
        target: header3,
        offsets: [...ScrollOffset.Enter, ...ScrollOffset.Exit],
      }
    );
    scroll(
      animate(text4, {
        transform: ["scale(0.7)", "scale(1.08)", "scale(1.08)", "scale(0.7)"],
        color: [
          "var(--white)",
          "var(--orange)",
          "var(--orange)",
          "var(--white)",
        ],
      }),
      {
        target: header4,
        offsets: [...ScrollOffset.Enter, ...ScrollOffset.Exit],
      }
    );
  }




}

