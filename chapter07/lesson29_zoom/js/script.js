$(function(){
  $(window).mousemove(function(event) {
    if (event.pageX > $("#thumb").offset().left && event.pageX <= $("#thumb").offset().left + $("#thumb").width() &&
          event.pageY > $("#thumb").offset().top && event.pageY <= $("#thumb").offset().top + $("#thumb").height()) {
      var positionX = event.pageX;
      var positionY = event.pageY;

      positionX -= 20;
      positionY -= 20;

    			// span要素が#thumb内に収まるよう調整（横位置）
			if(event.pageX <= $("#thumb").offset().left + 20){
				positionY = $("#thumb").offset().left;
			}else if(event.pageX >= $("#thumb").offset().left + $("#thumb").width() - 20){
				positionX = $("#thumb").offset().left + $("#thumb").width() - 40;
			}else{
				positionX -= 20;
			}

			// span要素が#thumb内に収まるよう調整（縦位置）
			if(event.pageY <= $("#thumb").offset().top + 20){
				positionY = $("#thumb").offset().top;
			}else if(event.pageY >= $("#thumb").offset().top + $("#thumb").height() - 20){
				positionY = $("#thumb").offset().top + $("#thumb").height() - 40;
			}else{
				positionY -= 20;
			}


      $("span").css({"top": positionY, "left": positionX});

      $("span").show();

      $("#zoom img").css("top", ($("#thumb").offset().top - positionY) * 10);
      $("#zoom img").css("left", ($("#thumb").offset().width - positionX) * 10);
    } else {
      $("span").hide();
    }
  });
});
