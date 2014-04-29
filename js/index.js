$(document).ready(function(){ //iniciando con JQUERY
  function gameover (valor) {
    $('#retry').fadeIn('slow');
    return null;
  };
  //Inicio
  $('#iniciar').click(function(){
    $('#inicio').fadeOut('slow', function(){
     $('#cadenero').fadeIn('slow').removeClass('invisible');
     $('#edad').focus();
    });
  });

  //Primera pregunta la edad

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
    $('#cadenero').fadeOut(5000,function(){
      $('#parte1').fadeIn(1500).removeClass('invisible');
      $('#respuesta').focus();
    })
    event.preventDefault();
  });

  $('#pregunta').submit(function(event){
    var respuesta = $('#respuesta').val().toLowerCase().trim().replace(' ', '');

    console.log(respuesta);
    if(respuesta === 'si'){
      $('#imgRespuesta').attr('src','img/pow.png');
      $('#fraseRespuesta').text('Batman te golpea y caes inconciente.... Esperabas otro resultado? Batman es Batman y tu eres tu, obvio que te hiba a ganar');
    }else{
      $('#imgRespuesta').attr('src','img/thum_up.gif');
      $('#fraseRespuesta').text('Bien, elegiste no decir que si, esto te hace un ganador. La razón es que tu trasero no fue pateado por Batman');
    };
    $('#parte1').fadeOut(3000,function(){
      $('#Respuesta').fadeIn(1500);
    });
    event.preventDefault();
  });
  

});
