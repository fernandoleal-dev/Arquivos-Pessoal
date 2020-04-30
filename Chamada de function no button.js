
// Chamada de function no button que limpa a função

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
   
}