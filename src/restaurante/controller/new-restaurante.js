$(document).ready(function() {
    $('.btn-new').click(function(e) {
        e.preventDefault()

        $('.modal-title').empty()


        $('.modal-title').append('Adicionar novo restaurante de restaurante')


        $('.modal-body').load('src/restaurante/view/form-restaurante.html', function() {
            $.ajax({
                dataType: 'json',
                type: 'POST',
                assync: true,
                url: 'src/categoria/model/all-categoria.php',
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

        $('#modal-restaurante').modal('show')
    })

    $('.close, #close').click(function(e) {
        e.preventDefault()
        $('#modal-restaurante').modal('hide')
    })
})