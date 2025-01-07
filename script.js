"use strict";

const desktopBtn = document.querySelector(".btn_share");
const mobileBtn = document.querySelector(".btn_share_mobile");

const mobileActiveState = document.querySelector(".mobile-open-share");

desktopBtn.addEventListener("click", toggleDesktopShare);

function toggleDesktopShare() {
  const desktopActiveState = document.querySelector(".open-share");
  desktopActiveState.classList.toggle("display-none");
}
