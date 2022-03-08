import "./index.hbs";
import "./index.scss";
/* import common js */
import "js/common";
import { initLocalization } from "js/localization";

/* Your JS Code goes here */
window.addEventListener("DOMContentLoaded", () => {
  initLocalization();
});

window.addEventListener("load", () => {});
