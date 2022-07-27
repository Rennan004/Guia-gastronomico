$(document).ready(function() {

    $('#table-categoria').on('click', 'button.btn-view', function(e) {

        e.preventDefault()

        // Alterar as informações do modal para apresentação dos dados

        $('.modal-title').empty()
        $('.modal-body').empty()

        $('.modal-title').append('Visualização de registro')

        let ID = `ID=${$(this).attr('id')}`

        $.ajax({
            type: 'POST',
            dataType: 'json',
            assync: true,
            data: ID,
            url: 'src/categoria/model/view-categoria.php',
            success: function(dado) {
                if (dado.tipo == "success") {
                    $('.modal-body').load('src/categoria/view/form-categoria.html', function() {
                        $('#CATEGORIA').val(dado.dados.CATEGORIA)
                        $('#CATEGORIA').attr('readonly', 'true')
                    })
                    $('.btn-save').hide()
                    $('#modal-categoria').modal('show')
                } else {
                    Swal.fire({ // Inicialização do SweetAlert
                        title: 'e-Rifa', // Título da janela SweetAler
                        text: dado.mensagem, // Mensagem retornada do microserviço
                        type: dado.tipo, // Tipo de retorno [success, info ou error]
                        confirmButtonText: 'OK'
                    })
                }
            }
        })

    })
})