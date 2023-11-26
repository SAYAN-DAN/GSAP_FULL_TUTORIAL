var tl = gsap.timeline();

tl.from("#nav h1 ,#nav h4", {
  y: -100,
  stagger: 0.3,
  duration: 0.5,
  delay: 0.5,
});
