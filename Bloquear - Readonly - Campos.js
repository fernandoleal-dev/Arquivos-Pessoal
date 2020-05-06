// Readonly no Campo

// Campo bloqueado 
$('inp:idDoCampo').css('pointer-events', 'none');
$('inp:idDoCampo').prop('readonly', true);
$('inp:idDoCampo').attr("tabindex","-1");

//Campo Liberado
$('inp:idDoCampo').css('pointer-events', 'auto');
$('inp:idDoCampo').prop('readonly', false);
$('inp:idDoCampo').attr("tabindex","1");




