import Masonry from "masonry-layout";

(function($) {
  "use strict";

  $(window).on("load", function() {
    var grid = document.querySelector(".grid");
    var msnry = new Masonry(grid, {
      // options...
      columnWidth: ".grid--sizer",
      itemSelector: ".grid--item",
      gutter: ".grid--gutter"
      //   horizontalOrder: true,
      //   percentPosition: true
      //   columnWidth: "25%"
    });
  });
})(jQuery);
