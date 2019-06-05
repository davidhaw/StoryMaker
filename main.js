$(document).ready(function() {
    $("#generate").click(function() {
      $.ajax({
          url : "dictionary.txt",
          dataType: "text",
          success : function (txt) {

            var words = txt.split( "\n" );
            console.log("Random Word From Number: ", epic[getRandomInt(0, 178691)]);
          }
      });
    });
});

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
