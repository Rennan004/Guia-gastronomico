$(document).ready(function() {
    $('.btn-new').click(function(e) {
        e.preventDefault()

        $('.modal-title').empty()


        $('.modal-title').append('Adicionar novo usuario')

        $('.modal-body').load('src/usuario/view/form-usuario.html', function() {
            $.ajax({
                dataType: 'json',
                type: 'POST',
                assync: true,
                url: 'src/tipo/model/all-tipo.php',
                success: function(dados) {
                    for (const result of dados) {
                        $('#TIPOUSUARIO_ID').append(`
                        <option value="${result.ID}">${result.NOME}</option>`)
                    }
                }
            })
        })

        $('.btn-save').show()

        $('.btn-save').attr('data-operation', 'insert')

        $('#modal-usuario').modal('show')
    })

    $('.close, #close').click(function(e) {
        e.preventDefault()
        $('#modal-usuario').modal('hide')
    })
})