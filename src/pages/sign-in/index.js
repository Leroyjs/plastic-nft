import "./index.hbs";
import "./index.scss";
/* import common js */
import "js/common";
import { initLocalization } from "js/localization";
// var bookListingTemplate = require("./index.hbs");
/* import partials and lib */

/* Your JS Code goes here */
window.addEventListener("DOMContentLoaded", () => {
  initLocalization();
});

window.addEventListener("load", () => {});
