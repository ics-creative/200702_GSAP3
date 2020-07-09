import { gsap } from "gsap";

window.addEventListener("DOMContentLoaded", () => {
  console.log("loading...");
  // timelineを作成
  const tl = gsap.timeline({
    repeat: -1, // アニメーションの繰り返し回数。-1で無限回
    repeatDelay: 0.3, // ループとループの間の時間
    defaults: { duration: 0.5, ease: "power4.out" }, // tweenのデフォルトの値
  });

  // アニメーションを実行
  tl.from(".box", {
    scale: 0,
  })
    .to(".box1", {
      left: 50,
    })
    .to(
      ".box2",
      {
        right: 50,
      },
      "<"
    ) // "<"は「前のアニメーションと同時に再生する」オプション
    .to(".box", {
      scale: 0,
    });
});
