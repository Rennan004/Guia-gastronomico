$('#CEP').focusout(function(e) {
    e.preventDefault()
    var numCep = $('#CEP').val()
    var url = "https://viacep.com.br/ws/" + numCep + "/json/"

    $.ajax({
        url: '../view/form-restaurante.html',
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