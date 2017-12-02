$(document).ready(function() {
  alert($("#turtledove").text());
  $("#goal-button").click(function() {
   $("#goal-list").append("<li class='list-item'>" + $("#new-goal").val() + "</li>");
   $("#new-goal").val("");
 })
})
