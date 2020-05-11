var _comprarCampoMult = function (d) {
    var linha = $('inp:idCampo').length
    var i = 1

    if (linha>=2){
        for (i=1; i<=linha-1; i++){
            var x= i-1
            var variavel = $("inp:idCampo").eq(i).val()
            var variavel1 = $("inp:idCampo").eq(x).val()
            if (variavel != variavel1){
                $('inp:idCampo').val("")
                break;

            } else {
                $('inp:idCampo').val("")

            } 

        }

    } else {
        $('inp:idCampo').val("")

    }

}