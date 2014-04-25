$(document).ready(function(){ //iniciando con JQUERY
  $('#validaMayoria').submit(function(event){
    var edad = $('#edad').val();
    console.log(edad);
    if(edad >=18){
      $('#mnsj1').text('Muy bien puedes pasar');
    }else{
      $('#mnsj1').text('lo siento NO puedes pasar');
    };
      $('#cadenero article:first-child').fadeOut('slow',function(){
        $('#mnsj1').fadeIn();
      });
    event.preventDefault();
  });

});