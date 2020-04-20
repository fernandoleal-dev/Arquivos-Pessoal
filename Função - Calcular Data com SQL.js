var $dataRealParaPagamento = new Date(), validaData = 0;
var EFeriado = true;

var _dataRealPg = () => {
    var data = $dataRealParaPagamento.toLocaleDateString();
    var d = new Date();
    var n = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    //var dataSimulation = new Date(parseInt(data.split('/')[2]), parseInt(data.split('/')[1]) - 1, parseInt(data.split('/')[0]) + 1);
    //fonte de dados : FI01 - DATA PRAZO + 3 dias
    $.ajax({
        type: "GET",
        async: false,
        url: "../api/json/datasource/get/1.0/qw0Xk6xWKL563BI8VvBqJnWkF0atIBO57yIS81jGhIvRSzFo0irD7NCVJv8ug7F3xNgRKWIbvA0AkXbT1EHq2A__",
        data: {
            inpdata: data.split('/')[2] + '/' + data.split('/')[1] + '/' + data.split('/')[0] + ' ' + n + ':' + m + ':' + s
        },
        success: function (response) {
            if (response.success.length > 0) {
                var dataRealParaPagamento = response.success[0].txt;
                _verificaFeriado(dataRealParaPagamento);
            }
        }
    });
}


var _verificaFeriado = (dataRealParaPagamento) => {
    var validacao = validaData;
    var teste = dataRealParaPagamento;
    var dataReal = $dataRealParaPagamento.toLocaleDateString();
    while (EFeriado) {
        //FI01 - VERIFICA SE DATA E FERIADO
        $.ajax({
            type: "GET",
            async: false,
            url: "../api/json/datasource/get/1.0/qw0Xk6xWKL563BI8VvBqJqEWLwl9QB5b1ZA-mPBokUDb3D7Z@5WBTPCt9O@AZq1iHRTlcmbZu23jVB2C0aSRUg__",
            data: {
                inpdata: dataRealParaPagamento
            },
            success: function (response) {
                if (response.success.length > 0) {
                    $dataRealParaPagamento = new Date(parseInt(dataReal.split('/')[2]), parseInt(dataReal.split('/')[1]) - 1, parseInt(dataReal.split('/')[0]) + 1);
                    _dataRealPg();
                } else {
                    validaData++;
                    if(validaData == 3){
                        var d = new Date();
                        var n = d.getHours();
                        var m = d.getMinutes();
                        var s = d.getSeconds();
                        EFeriado = false
                        $('inp:dataInicio').val(teste  + ' ' + n + ':' + m + ':' + s);
                    } else {
                        $dataRealParaPagamento = new Date(parseInt(dataReal.split('/')[2]), parseInt(dataReal.split('/')[1]) - 1, parseInt(dataReal.split('/')[0]) + 1);
                        _dataRealPg();
                    }
                }
            }
        });
    }
}




            




