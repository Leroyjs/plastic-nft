import isTouchDevice from "is-touch-device";
import Scrollbar from "smooth-scrollbar";
import { noop } from "./noop";

export function initScrollbar(callback = noop) {
  const scrollWrapperBlock = document.querySelector(".main");
  const isTouchable = isTouchDevice();

  const mainScrollbar = Scrollbar.init(scrollWrapperBlock, {
    alwaysShowTracks: true,
    damping: isTouchable ? 0.03 : 0.1,
  });

  mainScrollbar.addListener(() => {
    callback();
    mainScrollbar.update();
  });
}
