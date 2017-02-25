## Website Performance Optimization portfolio project

## How to Run
Click on the index.html file. It'll open a browser window with app loading onto it.

## Optimizations
1. Minified CSS and JS files.
2. Inlining of small CSS files.
3. Async JS files.
4. Web Font optimization :: https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/webfont-optimization
5. Replaced images with optimized images from Google Pagespeed.
6. In view/main.js, Seperated read style values and make style changes in functions (changePizzaSizes and updatePositions):: https://developers.google.com/web/fundamentals/performance/rendering/avoid-large-complex-layouts-and-layout-thrashing#avoid-forced-synchronous-layouts

v2

7. in view/pizza.html row no defined based on screen size
8. .querySelector replaced with getElementbyId and getElementsByClassName
9 Variable declarations and value allocation taken out from loop.

v3

10. All the suggested modifications in v2 file.