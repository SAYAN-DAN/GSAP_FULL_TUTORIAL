var tl = gsap.timeline();

tl.from("#nav", {
  opacity: 0,
  duration: 0.5,
  delay: 0.3,
});
tl.from("#nav h1 ,#nav h4", {
  y: -100,
  stagger: 0.3,
  duration: 0.5,
  delay: 0.5,
});

tl.from("#left h1", {
  opacity: 0,
  x: -200,
  duration: 0.5,
  stagger: 0.5,
});
tl.from("#right img", {
  scale: 2,
  opacity: 0,
  duration: 0.5,
});

gsap.from("#page2 .box", {
  scale: 0,
  opacity: 0,
  duration: 0.5,
  stagger: 0.5,
  scrollTrigger: {
    trigger: "#page2 .box",
    scroller: "body",
    // markers:true,
    start:"top 70%"

  },
});
