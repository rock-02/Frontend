var h1 = document.querySelectorAll("#page2 h1");

// console.log("h1 --> ", h1);

h1.forEach((e) => {
  let value = e.textContent;

  let splitted = value.split("");
  var clutter = "";
  splitted.forEach((e) => {
    clutter += `<span>${e}</span>`;
    // });
  });

  e.innerHTML = clutter;
});

// var spliText = h1.split("");

// console.log(spliText);
// var clutter = "";
// spliText.forEach((e) => {
//   clutter += `<span>${e}</span>`;
// });

// document.querySelector("#firsth1").innerHTML = clutter;

gsap.to("#page2 h1 span", {
  stagger: 0.1,
  color: "#E3E3C4",

  scrollTrigger: {
    trigger: "#page2 h1",
    scroller: "body",
    // markers: true,
    start: "top 50%",
    end: "top 5%",
    scrub: 2,
  },
});
