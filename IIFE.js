//imediately invoked fn expression

(function setup() {
  console.log("i am iife fn");
})();
(function () {
  console.log("i am second iife fn");
})();
(() => {
  console.log("i am third iife fn");
})();
const logo = (() => {
  console.log("i am fourth with arrow iife fn");
})();
