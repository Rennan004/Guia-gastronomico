$('.submit-cep').on('click', function() {
    var numCep = $('#CEP').val()
    var url = "https://viacep.com.br/ws/" + numCep + "/json/"

    $.ajax({
        url: url,
        type: "get",
        datatype: "json",

        success: function(dados) {
            $('#UF').val(dados.uf)
            $('#CIDADE').val(dados.localidade)
            $('#LOGRADOURO').val(dados.logradouro)
            $('#BAIRRO').val(dados.bairro)
        }
    })
})