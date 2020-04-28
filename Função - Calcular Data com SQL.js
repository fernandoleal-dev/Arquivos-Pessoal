var procedimentoIndevido = $('inp:procedimentoIndevido').val();

        if (procedimentoIndevido =="Sim"){
            
            var $dtAprovacaoNivel2 = new Date(), validaData = 0;
            var EFeriado = true;

            var _dataRealPg = () => {
                var dtAprovacaoNivel2 = $dtAprovacaoNivel2.toLocaleDateString();
                var d = new Date();
                var n = d.getHours();
                var m = d.getMinutes();
                var s = d.getSeconds();
                //var dataSimulation = new Date(parseInt(data.split('/')[2]), parseInt(data.split('/')[1]) - 1, parseInt(data.split('/')[0]) + 1);
                //fonte de dados : FI01 - DATA PRAZO + 1 dias
                $.ajax({
                    type: "GET",
                    async: false,
                    url: "../api/json/datasource/get/1.0/qw0Xk6xWKL563BI8VvBqJnWkF0atIBO57yIS81jGhIvRSzFo0irD7NCVJv8ug7F3xNgRKWIbvA0AkXbT1EHq2A__",
                    data: {
                        inpdata: dtAprovacaoNivel2
                    },
                    success: function (response) {
                        if (response.success.length > 0) {
                            var dtAprovacaoNivel2 = response.success[0].txt;
                            _verificaFeriado(dtAprovacaoNivel2);
                        }
                    }
                });
            }


            var _verificaFeriado = (dtAprovacaoNivel2) => {
                var validacao = validaData;
                var teste = dtAprovacaoNivel2;
                var dataRealParaPagamento = $dtAprovacaoNivel2.toLocaleDateString();
                while (EFeriado) {
                    //FI01 - VERIFICA SE DATA E FERIADO
                    $.ajax({
                        type: "GET",
                        async: false,
                        url: "../api/json/datasource/get/1.0/qw0Xk6xWKL563BI8VvBqJqEWLwl9QB5b1ZA-mPBokUDb3D7Z@5WBTPCt9O@AZq1iHRTlcmbZu23jVB2C0aSRUg__",
                        data: {
                            inpdata: dtAprovacaoNivel2
                        },
                        success: function (response) {
                            if (response.success.length > 0) {
                                $dtAprovacaoNivel2 = new Date(parseInt(dataRealParaPagamento.split('/')[2]), parseInt(dataRealParaPagamento.split('/')[1]) - 1, parseInt(dataRealParaPagamento.split('/') [0]) + 1);
                                _dataRealPg();
                            } else {
                                validaData++;
                                if(validaData == 1){
                                    var d = new Date();
                                    var n = d.getHours();
                                    var m = d.getMinutes();
                                    var s = d.getSeconds();
                                    EFeriado = false
                                    $('inp:dataRealParaPagamento').val(teste /* + ' ' + n + ':' + m + ':' + s*/);
                                } else {
                                    $dtAprovacaoNivel2 = new Date(parseInt(dataRealParaPagamento.split('/')[2]), parseInt(dataRealParaPagamento.split('/')[1]) - 1, parseInt(dataRealParaPagamento.split  ('/')[0]) + 1);
                                    _dataRealPg();
                                }
                            }
                        }
                    });
                }
            }

            _dataRealPg();
        
        
        } else {

            var $dtAprovacaoNivel2 = new Date(), validaData = 0;
            var EFeriado = true;

            var _dataRealPg = () => {
                var dtAprovacaoNivel2 = $dtAprovacaoNivel2.toLocaleDateString();
                var d = new Date();
                var n = d.getHours();
                var m = d.getMinutes();
                var s = d.getSeconds();
                //var dataSimulation = new Date(parseInt(data.split('/')[2]), parseInt(data.split('/')[1]) - 1, parseInt(data.split('/')[0]) + 1);
                //fonte de dados : FI01 - DATA PRAZO + 1 dias
                $.ajax({
                    type: "GET",
                    async: false,
                    url: "../api/json/datasource/get/1.0/qw0Xk6xWKL563BI8VvBqJnWkF0atIBO57yIS81jGhIvRSzFo0irD7NCVJv8ug7F3xNgRKWIbvA0AkXbT1EHq2A__",
                    data: {
                        inpdata: dtAprovacaoNivel2
                    },
                    success: function (response) {
                        if (response.success.length > 0) {
                            var dtAprovacaoNivel2 = response.success[0].txt;
                            _verificaFeriado(dtAprovacaoNivel2);
                        }
                    }
                });
            }


            var _verificaFeriado = (dtAprovacaoNivel2) => {
                var validacao = validaData;
                var teste = dtAprovacaoNivel2;
                var dataRealParaPagamento = $dtAprovacaoNivel2.toLocaleDateString();
                while (EFeriado) {
                    //FI01 - VERIFICA SE DATA E FERIADO
                    $.ajax({
                        type: "GET",
                        async: false,
                        url: "../api/json/datasource/get/1.0/qw0Xk6xWKL563BI8VvBqJqEWLwl9QB5b1ZA-mPBokUDb3D7Z@5WBTPCt9O@AZq1iHRTlcmbZu23jVB2C0aSRUg__",
                        data: {
                            inpdata: dtAprovacaoNivel2
                        },
                        success: function (response) {
                            if (response.success.length > 0) {
                                $dtAprovacaoNivel2 = new Date(parseInt(dataRealParaPagamento.split('/')[2]), parseInt(dataRealParaPagamento.split('/')[1]) - 1, parseInt(dataRealParaPagamento.split('/') [0]) + 1);
                                _dataRealPg();
                            } else {
                                validaData++;
                                if(validaData == 3){
                                    var d = new Date();
                                    var n = d.getHours();
                                    var m = d.getMinutes();
                                    var s = d.getSeconds();
                                    EFeriado = false
                                    $('inp:dataRealParaPagamento').val(teste /*  + ' ' + n + ':' + m + ':' + s*/);
                                    
                                } else {
                                    $dtAprovacaoNivel2 = new Date(parseInt(dataRealParaPagamento.split('/')[2]), parseInt(dataRealParaPagamento.split('/')[1]) - 1, parseInt(dataRealParaPagamento.split ('/')[0]) + 1);
                                    _dataRealPg();
                                }
                            }
                        }
                    });
                }
            }


            _dataRealPg();

            var _compararCampos = function (){

                var vencimento = $('inp:vencimento').val().split("/");
                vencimento = vencimento[2]+'-'+vencimento[1]+'-'+vencimento[0];
                vencimento = moment(vencimento);
                var dataRealParaPagamento = $('inp:dataRealParaPagamento').val().split("/");
                dataRealParaPagamento = dataRealParaPagamento[2]+'-'+dataRealParaPagamento[1]+'-'+dataRealParaPagamento[0];
                dataRealParaPagamento = moment(dataRealParaPagamento);
    
                if (moment(dataRealParaPagamento).isBefore(vencimento) == true){
                    vencimento = vencimento.format('DD/MM/YYYY')
                    $('inp:dataRealParaPagamento').val(vencimento);
    
                } 
            }
            _compararCampos();

           

        }