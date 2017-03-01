const createWindowControls = require('./window-controls.js')

document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById("header");
  const surface = document.getElementById("surface");
  header.style.webkitAppRegion = "drag";
  header.style.paddingLeft = "80px";

  const windowContainer = document.createElement("div");
  windowContainer.style.zIndex = 9999;
  surface.insertBefore(windowContainer, header)
  createWindowControls(windowContainer)
})
