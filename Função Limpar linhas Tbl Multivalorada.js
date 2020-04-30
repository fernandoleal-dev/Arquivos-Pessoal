// Função para limpar campo e linha de um Multivalorada
        
        var _tblDescRateio = function () {
            var rateio = $rateio.val();
                                     
                if (rateio=="2 - Rateio de Centro de Custo"){
                    $('#tblItensRateio tr:gt(1)').hide();
                    $('inp:naturezaRateio').attr("required", "N");
                    
                }
                if (rateio=="3 - Rateio de Natureza"){
                    $('#tblItensRateio tr:gt(1)').hide();
                    $('inp:centroDeCustoNaturezaRateio').attr("required", "N");
    
                }
                if (rateio=="4 - Rateio de Natureza e Centro de Custo"){
                    $('#tblItensRateio tr:gt(1)').hide();
                    
                    
    
                }
                
            

        }