$(document).ready(function() {
  
  function getJoke() {
$.getJSON("https://icanhazdadjoke.com/", function(json) { 
  let dadJoke = json.joke;
   $("#quote").html(dadJoke);
      });
}
  
  getJoke();
  $("#getJoke").on("click", getJoke);


});



