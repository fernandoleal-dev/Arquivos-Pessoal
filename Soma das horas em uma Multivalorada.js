var Tall = {
    inpTotalDeHoras: null,
    
    
      init: function () {
          FIEA.loadFields(Tall);
          this.setevents();
    
    
      },
    
      setevents: function () {
            async:false;
      }
          
    };
    
    
    $(window).load(function () {
      Tall.init();
    
    });
  function calculaHora(d){
    Tall.inpTotalDeHoras.val($('inp:quantidadeDeHoras').eq(0).val());
    var linha = $('#unidadeCentro tr').length -2;
    for (var i = 1; i <= linha; i++){
        var horaTotal = Tall.inpTotalDeHoras.val().split(':').map(Number);
        var horaLinha = $('inp:quantidadeDeHoras').eq(i).val().split(':').map(Number);
        var sum = (horaLinha[0]*60+horaLinha[1])+(horaTotal[0]*60+horaTotal[1]);
        var MM = sum%60;MM.toString().length==1?MM="0"+MM:0;
        if(isNaN(sum)) return;
        var resultado = Math.floor((sum)/60) +":"+ MM;
        Tall.inpTotalDeHoras.val(resultado);
    }
}