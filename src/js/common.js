import { initHeader } from "./components/header";
import { initScrollbar } from "./utils/scrollbar";
import { appearance } from "./utils/appearance";

window.addEventListener("DOMContentLoaded", () => {
  initScrollbar();
  initHeader();
  appearance();
});
