/** * Retona a diferença entre duas horas. 
	* Exemplo: 14:35 a 17:21 = 02:46 
	* Adaptada de http://stackoverflow.com/questions/2053057/doing-time-subtraction-with-jquery 
*/ 
function diferencaHoras(horaInicial, horaFinal) 
{ 
	// Tratamento se a hora inicial é menor que a final 
	if( ! isHoraInicialMenorHoraFinal(horaInicial, horaFinal) )
	{ 
		aux = horaFinal; 
		horaFinal = horaInicial; 
		horaInicial = aux; 
	} 
	hIni = horaInicial.split(':'); 
	hFim = horaFinal.split(':'); 
	horasTotal = parseInt(hFim[0], 10) - parseInt(hIni[0], 10); 
	minutosTotal = parseInt(hFim[1], 10) - parseInt(hIni[1], 10); 
	if(minutosTotal < 0)
	{ 
		minutosTotal += 60; horasTotal -= 1; 
	} 
	horaFinal = completaZeroEsquerda(horasTotal) + ":" + completaZeroEsquerda(minutosTotal); 
	return horaFinal; 
} 