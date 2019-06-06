$(document).ready(function() {
    $("#generate").click(function() {
      $.ajax({
          url : "dictionary.txt",
          dataType: "text",
          success : function (txt) {

            var words = txt.split( "\n" );
            $("#word1").html(function(i, newText) {
                newText = words[getRandomInt(0, words.length)]
                return newText;
            });
            $("#word2").html(function(i, newText) {
                newText = words[getRandomInt(0, words.length)]
                return newText;
            });
            $("#word3").html(function(i, newText) {
                newText = words[getRandomInt(0, words.length)]
                return newText;
            });
            $("#word4").html(function(i, newText) {
                newText = words[getRandomInt(0, words.length)]
                return newText;
            });
            console.log("Words Set");
          }
      });
    });
});

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
