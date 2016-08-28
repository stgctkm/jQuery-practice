$(function() {
  $(".alert").hide();

  var isValid = true;

  $("#submitBtn").click(function(){
    if (!$("#text").val()) {
      $("#textSection .alert").show();
      isValid = false;
    } else {
      $("#textSection .alert").hide();
    }

    if ($("input[name='radio']:checked").length == 0) {
      $("#radioSection .alert").show();
      isValid = false;
    } else {
      $("#radioSection .alert").hide();
    }

    if ($("input[name='checkbox']:checked").length == 0) {
      $("#checkboxSection .alert").show();
      isValid = false;
    } else {
      $("#checkboxSection .alert").hide();
    }

    if ($("select").val() == "none") {
      $("#selectSection .alert").show();
      isValid = false;
    } else {
      $("#selectSection .alert").hide();
    }


    if (!$("#textarea").val()) {
      $("#textareaSection .alert").show();
      isValid = false;
    } else {
      $("#textareaSection .alert").hide();
    }

    if (!isValid) {
      return false;
    }
  });
});
