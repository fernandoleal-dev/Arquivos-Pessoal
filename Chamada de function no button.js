
// Chamada de function no button//

// No layout 
$('#idDobutton').attr('onclick', '');

// No eventHandlers  
$('#idDobutton').click(function() {
  $('#idDobutton').attr('onclick', '');
  if (nomeDaFunction()){
    $('#idDobutton').attr('onclick', 'conclude()');
    conclude();
  }
  
});

// A function 
function nomeDaFunction() {

  if (condicional){
    return false;
  }
   
  return true;
}


function verificaExistenciaDeAnexos() {
  var encaminharPlanilha = $('inp:encaminharPlanilhaTrabalhador').val();
  if (encaminharPlanilha == 'Sim' && $('[name=inpDsFileName]').length == 0) {
      alert('É necessário anexar a planilha de trabalhadores');
      return false;
  }
  var totalLinhas = $('#tbleProdutos tr').length - 2,
      result = 0;
  for (var i = 0; i <= totalLinhas; i++) {
      if ($('inp:codClasse').eq(i).val() == 34 || $('inp:codClasse').eq(i).val() == 16 || $('inp:codClasse').eq(i).val() == 56) {
          result++;
      }
  }
  if (result !== 0 && $('[name=inpDsFileName]').length == 0 && $('inp:necessitaAjusteNaProposta').val() == "Não") {
      alert('É necessário anexar a planilha de trabalhadores');
      return false;
  }
  return true;
}