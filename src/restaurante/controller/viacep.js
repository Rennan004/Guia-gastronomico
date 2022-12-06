$('#CEP').focusout(function(e) {
    e.preventDefault()
    var inspecial2 = $('#CEP').val();

    var especial2 = inspecial2.replace(/[^\d]+/g, '')

    var url = "https://viacep.com.br/ws/" + especial2 + "/json/"



    $.ajax({
        url: url,
        type: "get",
        datatype: "json",

        success: function(dado) {
            $('#UF').val(dado.uf)
            $('#CIDADE').val(dado.localidade)
            $('#LOGRADOURO').val(dado.logradouro)
            $('#BAIRRO').val(dado.bairro)
        }
    })
})