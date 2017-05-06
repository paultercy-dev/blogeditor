$(function(){
   
    $("#accordion").accordion();
});
function setColor(color) {
  var perview = document.querySelector(".blog-perview");

  perview.className = color;
};