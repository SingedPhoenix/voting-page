$(document).ready(function() {
  var age = parseInt(prompt("How old are you?"));

if (age >= 18) {
  $("#canvote").show();
} else {
  $("#cantvote").show();
}
});
