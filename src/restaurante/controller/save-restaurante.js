$(document).ready(function() {

    $('.close, #close').click(function(e) {
        e.preventDefault()
        $('#modal-restaurante').modal('hide')
    })

    $('.btn-save').click(function(e) {
        e.preventDefault()

        let dados = $('#form-restaurante').serialize()

        dados += `&operacao=${$('.btn-save').attr('data-operation')}`

        $.ajax({
            type: 'POST',
            dataType: 'json',
            assync: true,
            data: dados,
            url: 'src/restaurante/model/save-restaurante.php',
            success: function(dados) {
                Swal.fire({
                    title: 'Sistema de rifas',
                    text: dados.mensagem,
                    icon: dados.tipo,
                    confirmButtonText: 'OK'
                })

                $('#modal-restaurante').modal('hide')
                $('#table-restaurante').DataTable().ajax.reload()
            }
        })
    })

})