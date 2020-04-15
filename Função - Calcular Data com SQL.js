var $dataPrazo = new Date(), validaData = 0;
            var EFeriado = true;

            var _buscaPrazo = () => {
                var data = $dataPrazo.toLocaleDateString();
                var d = new Date();
                var n = d.getHours();
                var m = d.getMinutes();
                var s = d.getSeconds();
                //var dataSimulation = new Date(parseInt(data.split('/')[2]), parseInt(data.split('/')[1]) - 1, parseInt(data.split('/')[0]) + 1);
                //fonte de dados : P004 - DATA PRAZO + 1 dias
                $.ajax({
                    type: "GET",
                    async: false,
                    url: "../api/json/datasource/get/1.0/qw0Xk6xWKL563BI8VvBqJl5CuNG4aT3LmsjriFWPX4HhYwGBCGnuJEEEJJzcjTphanWn3MExJrpuFU2wsEBs2g__",
                    data: {
                        inpdata: data.split('/')[2] + '/' + data.split('/')[1] + '/' + data.split('/')[0] + ' ' + n + ':' + m + ':' + s
                    },
                    success: function (response) {
                        if (response.success.length > 0) {
                            var dataPrazo = response.success[0].txt;
                            _verificaFeriado(dataPrazo);
                        }
                    }
                });
            }


            var _verificaFeriado = (dataPrazo) => {
                var validacao = validaData;
                var teste = dataPrazo;
                var dataReal = $dataPrazo.toLocaleDateString();
                while (EFeriado) {
                    //P004 - VERIFICA SE DATA E FERIADO
                    $.ajax({
                        type: "GET",
                        async: false,
                        url: "../api/json/datasource/get/1.0/qw0Xk6xWKL563BI8VvBqJi9QD8Nzhu3iOh@KKGjE@1vV5kdaLZ7H7N7Fg4q-dCig7cqghIp29y9IaHePxTSs-A__",
                        data: {
                            inpdata: dataPrazo
                        },
                        success: function (response) {
                            if (response.success.length > 0) {
                                $dataPrazo = new Date(parseInt(dataReal.split('/')[2]), parseInt(dataReal.split('/')[1]) - 1, parseInt(dataReal.split('/')[0]) + 1);
                                _buscaPrazo();
                            } else {
                                validaData++;
                                if(validaData == 2){
                                    var d = new Date();
                                    var n = d.getHours();
                                    var m = d.getMinutes();
                                    var s = d.getSeconds();
                                    EFeriado = false
                                    $('inp:dataInicio').val(teste  + ' ' + n + ':' + m + ':' + s);
                                } else {
                                    $dataPrazo = new Date(parseInt(dataReal.split('/')[2]), parseInt(dataReal.split('/')[1]) - 1, parseInt(dataReal.split('/')[0]) + 1);
                                    _buscaPrazo();
                                }
                            }
                        }
                    });
                }
            }


            _buscaPrazo();