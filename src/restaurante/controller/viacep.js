$('.submit-btn').on('click', function() {
    var numCep = $('#CEP').val()
    var url = "https://viacep.com.br/ws/" + numCep + "/json/"

    $.ajax({
        url: url,
        type: "get",
        datatype: "json",

        success: function(dados) {
            $('#uf').val(dados.uf)
            $('#Cidade').val(dados.localidade)
            $('#Logradouro').val(dados.logradouro)
            $('#Bairro').val(dados.bairro)
        }
    })
})