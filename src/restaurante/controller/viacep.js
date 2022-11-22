$('#CEP').focusout(function() {
    var numCep = $('#CEP').val()
    var url = "https://viacep.com.br/ws/" + numCep + "/json/"

    $.ajax({
        url: url,
        type: "get",
        datatype: "json",

        success: function(dados) {
            $('#UF').val(dados.UF)
            $('#LOGRADOURO').val(dado.dados.LOGRADOURO)
            $('#BAIRRO').val(dado.dados.BAIRRO)
            $('#CIDADE').val(dado.dados.CIDADE)
        }
    })
})