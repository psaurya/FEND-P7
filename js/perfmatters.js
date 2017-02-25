// Measuring the Critical Rendering Path with Navigation Timing
// https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp

function logCRP() {
  var t = window.performance.timing,
    dcl = t.domContentLoadedEventStart - t.domLoading,
    complete = t.domComplete - t.domLoading;
  var stats = document.getElementById("crp-stats");
  stats.textContent = 'DCL: ' + dcl + 'ms, onload: ' + complete + 'ms';
}

window.addEventListener("load", function (event) {
  logCRP();
});


var font1 = new FontFace("Open Sans", "url(https://fonts.gstatic.com/s/opensans/v13/cJZKeOuBrn4kERxqtaUH3VtXRa8TVwTICgirnJhmVJw.woff2) format('woff2')", {
  style: 'normal',
  unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215, U+E0FF, U+EFFD, U+F000',
  weight: '400'
});

var font2 = new FontFace("Open Sans", "url(https://fonts.gstatic.com/s/opensans/v13/cJZKeOuBrn4kERxqtaUH3VtXRa8TVwTICgirnJhmVJw.woff2) format('woff2')", {
  style: 'normal',
  unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215, U+E0FF, U+EFFD, U+F000',
  weight: '700'
});

font1.load();
font2.load();

(function () {
  //  document.fonts.add(font2);
  document.fonts.add(font1);
  document.body.style.fontFamily = "Open Sans, sans-serif";
  //  document.button.style.fontFamily = "Open Sans, sans-serif";
  //  document.input.style.fontFamily = "Open Sans, sans-serif";
  //  document.select.style.fontFamily = "Open Sans, sans-serif";
  //  document.textarea.style.fontFamily = "Open Sans, sans-serif";
})();