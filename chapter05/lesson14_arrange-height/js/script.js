$(function(){
  var highest = 0;
  $("main div").each(function() {
    if ($(this).height() > highest) {
      highest = $(this).height();
    }
  });

  // $("main div").css("height", highest + "px");

// underscore.js
  var _high = _.each($("main div"), function(v, k, l) {
    console.log(k);
    console.log(v.clientHeight);
    console.log(l);
    console.log($(this).attr("height"));
  })
  var _high = _.max($("main div"), function(div) {
    return div.clientHeight;
  });

  $("main div").css("height", _high.clientHeight + "px");

});
