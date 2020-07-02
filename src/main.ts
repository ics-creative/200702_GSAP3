import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// プラグインはgsap.registerPluginで登録
gsap.registerPlugin(ScrollTrigger);

window.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector("header");

  const tween = gsap.to(button, {
    duration: 0.5,
    paused: true,
    ease: "power2.out",
    width: "100%",
    height: "100px",
    lineHeight: "100px",
    borderRadius: "0%",
    cursor: "default",
    marginTop: "0px",
    backgroundColor: "#0FBD94",
  });

  const showContent = () => {
    // 以下のtween.play()とgsap.to()は同じことをしている
    tween.play();
    gsap.to("header h1", {
      opacity: 1,
    });
    gsap.to(".img-container img", {
      opacity: 1,
      delay: 1,
      duration: 1.5,
      y: -10,
      ease: "power2.out",
      stagger: {
        from: "start",
        amount: 0.8,
      },
    });
    gsap
      .timeline({
        defaults: { ease: "power2.out", duration: 1 },
        scrollTrigger: {
          markers: true,
          trigger: ".content",
          start: "top 75%",
          end: "bottom top",
          toggleActions: "restart complete reverse reset",
        },
      })

      .to(".content-text h2", {
        opacity: 1,
        y: -10,
      })
      .to(".content-text p", {
        opacity: 1,
        y: -10,
      }, "-=0.7") // 直前のアニメーションに0.7秒かぶせる
      .to(".content img", {
        opacity: 1,
        x: -10,
      }, "-=0.7"); // 直前のアニメーションに0.7秒かぶせる
  };

  button.addEventListener("click", showContent);
});
