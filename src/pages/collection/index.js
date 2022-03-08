import "./index.hbs";
import "./index.scss";
import "js/common";

import { initLocalization } from "js/localization";
import { initSlider } from "js/components/slider";

/* Your JS Code goes here */
window.addEventListener("DOMContentLoaded", () => {
  initLocalization();
  initSlider();
});

window.addEventListener("load", () => {});
