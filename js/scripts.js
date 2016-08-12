$(document).ready(function() {
  $("form").submit(function(event) {
    $("div").removeClass("has-error");
    event.preventDefault();
//Frontend
    var name = $("#nameInput").val();
    var ruby = 0;
    var java = 0;
    var csharp = 0;
    var design = 0;
    var php = 0;
    var answer1 = parseInt($("input:radio[name=question1]:checked").val());
    var answer2 = parseInt($("input:radio[name=question2]:checked").val());
    var answer3 = parseInt($("input:radio[name=question3]:checked").val());
    var answer4 = parseInt($("input:radio[name=question4]:checked").val());
    var answer5 = parseInt($("input:radio[name=question5]:checked").val());
    var favColor = $("#color").val();
    if(!name) {
      $("#nameBox").addClass("has-error");
      $("#nameHelp").text("Please enter your name");
    }
    else {
      if(answer1 === 1) {
      design ++;
      php ++;
      }
      else {
      design --;
      }
      if(answer2 === 1) {
      design ++;
      ruby ++;
      }
      else {
      design --;
      }

      if(answer3 === 3) {
        csharp ++;
        ruby ++;
      }
      else if(answer3 === 2) {
        php ++;
        design ++;
      }
      else if(answer3 === 1) {
        ruby ++;
      }
      else {
        design ++;
      }
      if(answer4 === 2) {
        csharp ++;
      }
      else if(answer4 === 1) {
        php ++;
        java ++;
      }

      if(answer5 === 1) {
        csharp ++;
        php ++;
      }
      else if(answer5 === 2) {
        ruby ++;
      }
      console.log(ruby, java, csharp, design)
      $("img").hide();
      $("div#trackSuggestion").css("backgroundColor", "favColor");
      $("#trackSuggestion").show();
      $("#nameOut").text(name);
      //Which result to display logic
      if(ruby > java && ruby > csharp && ruby > design && ruby > php){
        $("#track").text("Ruby");
        $("img#ruby").show();
      }
      else if (java > ruby && java > csharp && java > design && java > php) {
        $("#track").text("Java");
        $("img#java").show();
      }
      else if (csharp > ruby && csharp > java && csharp > design && csharp > php) {
        $("#track").text("C#");
        $("img#csharp").show();
      }
      else if (csharp > ruby && csharp > java && csharp > design && csharp > php) {
        $("#track").text("Design");
        $("img#design").show();
      }
      else if (csharp > ruby && csharp > java && csharp > design && csharp > php) {
        $("#track").text("PHP");
        $("img#php").show();
      }
      else {
        $("#track").text("... well, we're not sure, sorry! The test is still under development and we wouldn't want to give bad advice.")
        $("img#lost").show();
      }
    }
  });
});
