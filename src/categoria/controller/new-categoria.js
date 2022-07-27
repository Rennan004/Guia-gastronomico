$(document).ready(function() {
    $('.btn-new').click(function(e) {
        e.preventDefault()

        $('.modal-title').empty()


        $('.modal-title').append('Adicionar novo categoria de categoria')

        $('.modal-body').load('src/categoria/view/form-categoria.html')

        $('.btn-save').show()

        $('.btn-save').attr('data-operation', 'insert')

        $('#modal-categoria').modal('show')
    })

    $('.close, #close').click(function(e) {
        e.preventDefault()
        $('#modal-categoria').modal('hide')
    })
})