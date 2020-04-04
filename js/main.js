// Creo una funzione che mi genera un numero randomico tra 1 e 20
function redBoxesMax(){
  return Math.floor(Math.random() * 21);
}
// Salvo questo numero(che mi dirà il numero massimo di quadrati rossi che avro in pagina) in una variabile
var redBoxesCount = redBoxesMax();
console.log(redBoxesCount);

var count = 0;

// Creo una funzione che mi dice quanti quadrati saranno effettivamente rossi
function isRedBoxe(){
  return (Math.random() > 0.33);
}
// Genero la griglia di quadrati rossi e verdi
for (var i = 0; i < 64; i++) {
  if (isRedBoxe() && count < redBoxesCount) {
    $('.container').append('<div class="square redWannabe"></div>');
    count++;
  } else {
    $('.container').append('<div class="square"></div>');
  }
};


$(document).ready(function(){

var redScore = 0;
var greenScore = 0;

  // Gestisco il click di H1
  $('h1').click(
    function(){
      $('.green-counter').css('background', 'green').slideToggle();
      $('.red-counter').css('background', 'red').slideToggle();
      $('.container').css('display', 'flex');
    }
  );

  // Gestisco il click dei quadrati
  $('.square').click(
    function () {
      if($(this).hasClass('active')){
        alert("L'hai gia cliccato");
        console.log("OH! l'hai già cliccato!");

      } else if($(this).hasClass('redWannabe')){
        $(this).css('background', 'red');
        redScore++;
        $(this).addClass('active');
        console.log("Punteggio Rosso: " + redScore);
        $('.red-counter').children().html(redScore);

      } else {
        $(this).css('background', 'green');
        greenScore++;
        $(this).addClass('active');
        console.log("Punteggio Verde: " + greenScore);
        $('.green-counter').children().html(greenScore);
      }
    }
  );
});
