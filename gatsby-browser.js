exports.onInitialClientRender = () => {
  var overlay = document.querySelector(".overlay-loading");
  var bodyTag = document.querySelector("body");

  window.addEventListener("load", function () {
    overlay.classList.add("loaded");
    bodyTag.classList.remove("hidebody");

  });
};
