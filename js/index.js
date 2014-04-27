$(document).ready(function(){ //iniciando con JQUERY
  function gameover (valor) {
    return null;
  }

  $('#validaMayoria').submit(function(event){
    var edad = $('#edad').val();
    console.log(edad);
    if(edad >=18){
      $('#mnsj1').text('Muy bien, que la fuerza te acompañe');
    }else{
      $('#mnsj1').text('Esta bien pasa, solo no me hare responsable si algo te pasa');
    };
      $('#cadenero article:first-child').fadeOut('slow',function(){
        $('#mnsj1').fadeIn();
      });
    event.preventDefault();
  });
  

});
