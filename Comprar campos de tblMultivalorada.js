var _verificarNatureza = function (d) {
    var linha = $('inp:natureza').length
    var i = 1

    if (linha>=2){
        for (i=1; i<=linha-1; i++){
            var x= i-1
            var natureza = $("inp:natureza").eq(i).val()
            var natureza1 = $("inp:natureza").eq(x).val()
            if (natureza != natureza1){
                $('inp:classificacaoDaNatureza').val("Multinatureza")
                break;

            } else {
                $('inp:classificacaoDaNatureza').val("Única Natureza")

            } 

        }

    } else {
        $('inp:classificacaoDaNatureza').val("Única Natureza")

    }

}