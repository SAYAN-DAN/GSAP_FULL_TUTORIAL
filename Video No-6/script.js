var tl = gsap.timeline();

let a = 0;
function time() {
  setInterval(() => {
    a = a + Math.floor(Math.random() * 15);
    if (a < 100) {
      document.querySelector("#loader h1").innerHTML = a + "%";
    } else {
      a = 100;
      document.querySelector("#loader h1").innerHTML = a + "%";
    }
  }, 100);
}

tl.to("#loader h1", {
  scale: 1.5,
  duration: 1,
  delay: 0.3,
  onStart: time(),
});

tl.to("#loader", {
  // y:"-100vh",
  top: "-100vh",
  delay: 0.5,
  duration: 1,
});

gsap.to("#page1 h1", {
  transform: "translateX(-100%)",
  fontWeight: "100",
  scrollTrigger: {
    trigger: "#page1",
    scroller: "body",
    // markers: true,
    start: "top 0",
    end: "top -200%",
    scrub: 4,
    pin: true,
  },
});
