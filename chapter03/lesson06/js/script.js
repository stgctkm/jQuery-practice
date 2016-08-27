$(function(){
  $("#bg").hide();
  $("#click").click(function(event) {
    event.stopPropagation();
    $("#bg").fadeIn(300);
  });
  //$("#ok").click(function() {
  //  $("#bg").fadeOut(300);
  //});

  $("#ok").click(function(event) {
    event.preventDefault();
  })
  $(document).on("click", (function() {
    $("#bg").fadeOut(400);
  }));
  //document.addEventListener("click", (function() {
  //  $("#bg").fadeOut(400);
  //}));
});
