$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
    var question1 = $("input:radio[name=1]:checked").val();
    var question2 = $("input:radio[name=2]:checked").val();
    var question3 = $("input:radio[name=3]:checked").val();
    var question4 = $("input:radio[name=4]:checked").val();
    var question5 = $("input:radio[name=5]:checked").val();

    $(".csharp").hide();
    $(".ruby").hide();
    $(".css").hide();
    $(".android").hide();

    if (question1 === "back" && question2 === "network" && question3 === "no" && question4 === "large" && question5 === "logic") {
      alert("Do or do not. There is no try.");
      $(".csharp").toggle();
    } else if (question1 = "both" && question3 === "yes" && question4 === "modest" && question5 === "ui") {
      alert("Do or do not. There is no try.")
      $(".ruby").toggle();
    } else if (question3 === "yes" && question4 === "large" && question5 === "ui") {
      alert("Do or do not. There is no try.")
      $(".css").toggle();
    } else if (question2 === "mobile" && question3 === "no" && question4 === "large" && question5 === "logic") {
      alert("Do or do not. There is no try.")
      $(".android").toggle();
    } else {
      alert("Do or do not. There is no try.")
      $(".android").toggle();
    }
  });
});
