$(window).load(function(){ 
  $('.triggerData').change(function() {
    limpaTbl();
    if ($('inp:dataUm').val() !== "" && $('inp:dataDois').val() !== "") {
      teste();
    }
    if ($('inp:dataUm').val() !== "" && $('inp:dataDois').val() == "") {
    
    }
  });
  
  $('inp:dataUm').datepicker({
    language: 'pt-BR',
    format: 'dd/mm/yyyy',
    autoclose: true,
    startDate:new Date()
  }).on('changeDate', function(selected) {
    startDate = new Date(selected.date.valueOf());
    $('inp:dataDois').datepicker('setStartDate', startDate);
  }); 
});




function teste() {
  var dtSt = $('inp:dataUm').val().split("/"),
      dtSt = dtSt[2]+'-'+dtSt[1]+'-'+dtSt[0],
      dtEnd = $('inp:dataDois').val().split("/"),
      dtEnd = dtEnd[2]+'-'+dtEnd[1]+'-'+dtEnd[0],
      dateStart = moment(dtSt),
      dateEnd = moment(dtEnd),
      i = 0,
      timeValues = [];
  if (moment(dtSt).isBefore(dtEnd) == true) {
    while (dateEnd > dateStart || dateStart.format('D') === dateEnd.format('D')) {
      if (i !== 0) {
        $("#tblData #BtnInsertNewRow").click();
      }
      timeValues.push(dateStart.format('DD/MM/YYYY'));
      $('inp:dataFinal').eq(i).val(dateStart.format('DD/MM/YYYY'));
      dateStart.add(1,'day');
      i++
    }
  }
  else {
    Swal.fire({
            type: 'info',
            title: 'A data de início não poderá ser maior que a data final!',
            html: 'TESTE'
      });
    $('inp:dataDois').val('');
  }  
}
function limpaTbl() {
  var linhas = $('#tblData tbody tr').length - 2;
  for (x = linhas; x >= 0; x--) {
    if (x == 0) {
      $('inp:dataFinal').eq(x).val("");
    }
    else {
      DeleteRow($("#tblData button")[x]);
    }
  }
}


function verificaDataPrazo(d) {
    if ($('inp:prazoDoServico').val() !== "") {
      var dataFimServico = $(d).closest('tr').find('inp:dataFimServico').val().split("/"),
          dataFimServico = moment(dataFimServico[2]+'-'+dataFimServico[1]+'-'+dataFimServico[0]),
          prazoServico = $('inp:prazoDoServico').val().split("/"),
          prazoServico = moment(prazoServico[2]+'-'+prazoServico[1]+'-'+prazoServico[0]);
      if (moment(prazoServico).isSame(dataFimServico) == false) {
          if (moment(prazoServico).isAfter(dataFimServico) == false) {
              alert('A data agendada causará o atraso da entrega do serviço. Favor reprogramar a data do agendamento.')
          }
      }
    }
    else {
      alert('O campo de prazo do serviço deve ser preenchido.');
      $(d).closest('tr').find('inp:dataFimServico').val('');
    }
  }