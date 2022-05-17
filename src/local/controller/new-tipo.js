$(document).ready(function() {
    $('.btn-new').click(function(e) {
        e.preventDefault()

        $('.modal-title').empty()


        $('.modal-title').append('Adicionar novo tipo de tipo')

        $('.modal-body').load('src/tipo/view/form-tipo.html')

        $('.btn-save').show()

        $('.btn-save').attr('data-operation', 'insert')

        $('#modal-tipo').modal('show')
    })

    $('.close, #close').click(function(e) {
        e.preventDefault()
        $('#modal-tipo').modal('hide')
    })
})