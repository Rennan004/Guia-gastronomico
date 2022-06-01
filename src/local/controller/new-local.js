$(document).ready(function() {
    $('.btn-new').click(function(e) {
        e.preventDefault()

        $('.modal-title').empty()


        $('.modal-title').append('Adicionar novo local')

        $('.modal-body').load('src/local/view/form-local.html')

        $('.btn-save').show()

        $('.btn-save').attr('data-operation', 'insert')

        $('#modal-local').modal('show')
    })

    $('.close, #close').click(function(e) {
        e.preventDefault()
        $('#modal-local').modal('hide')
    })
})