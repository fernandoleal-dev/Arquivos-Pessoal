/** * Soma duas horas. * Exemplo: 12:35 + 07:20 = 19:55. */ 
function somaHora(horaInicio, horaSomada) 
{ 
	horaIni = horaInicio.split(':'); 
	horaSom = horaSomada.split(':'); 
	horasTotal = parseInt(horaIni[0], 10) + parseInt(horaSom[0], 10); 
	minutosTotal = parseInt(horaIni[1], 10) + parseInt(horaSom[1], 10); 

	if(minutosTotal >= 60){ 
		minutosTotal -= 60; horasTotal += 1; 
	} 
	horaFinal = completaZeroEsquerda(horasTotal) + ":" + completaZeroEsquerda(minutosTotal); 
	return horaFinal; 
}