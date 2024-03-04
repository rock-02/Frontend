var tl = gsap.timeline();

tl.from("#nav h3", {
  y: -50,
  x: -50,
  opacity: 0,
  duration: 0.8,
  delay: 0.4,
  stagger: 0.3,
});

tl.from("#main h1", {
  y: -500,
  x: -500,
  duration: 1,
  opacity: 0,
  delay: 0.4,
  stagger: 0.3,
});

tl.from("img", {
  x: 500,
  y: 500,
  duration: 1,
  opacity: 0,
  delay: 0.4,
  stagger: 0.3,
});
