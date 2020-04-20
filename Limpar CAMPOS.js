
//Limpar CAMPOS
function hideNsHow(hide, show) {
    try {
        //esconde
        $.each(hide, function (k, v) {
            if (v.indexOf("#") == 0) {
                $(v).hide();
                $(v).find("[xname^='inp']").each(function () {
                    this.setAttribute('required', 'N');
                    $(this).val("");
                });
            } else {
                $('inp:' + v)[0].setAttribute('required', 'N');
                $('inp:' + v).val("");
                if ($('inp:' + v).closest("tr").is(":visible") || $('inp:' + v).is(":visible")) {
                    $('inp:' + v).closest("tr").hide();
                }
            }
        });
        
        //mostra
        $.each(show, function (k, v) {
            if (v.indexOf("#") == 0) {
                $(v).show();
                $(v).find("[xname^='inp']").each(function () {
                    this.setAttribute('required', 'S');
                });
            } else {
                $('inp:' + v)[0].setAttribute('required', 'S');
                if (!$('inp:' + v).closest("tr").is(":visible") || !$('inp:' + v).is(":visible")) {
                    $('inp:' + v).closest("tr").show();
                }
            }
        });
    } catch (e) {
        console.error(e);
    }
}

