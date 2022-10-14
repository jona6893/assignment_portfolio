"use strict";
import {
  animate,
  scroll,
  timeline,
  inView,
  ScrollOffset,
} from "https://cdn.skypack.dev/motion";

document.addEventListener("DOMContentLoaded", () => {
  scroll(animate(".progress", { scaleX: [0, 1] }));
});
