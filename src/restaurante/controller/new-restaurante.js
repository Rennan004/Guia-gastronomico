$(document).ready(function() {
    $('.btn-new').click(function(e) {
        e.preventDefault()

        $('.modal-title').empty()


        $('.modal-title').append('Adicionar novo restaurante de restaurante')

        $('.modal-body').load('src/restaurante/view/form-restaurante.html')

        $('.btn-save').show()

        $('.btn-save').attr('data-operation', 'insert')

        $('#modal-restaurante').modal('show')
    })

    $('.close, #close').click(function(e) {
        e.preventDefault()
        $('#modal-restaurante').modal('hide')
    })
})