exports.onInitialClientRender = () => {
  var overlay = document.querySelector(".overlay-loading");

  window.addEventListener("load", function () {
    overlay.classList.add("loaded");

  });
};
