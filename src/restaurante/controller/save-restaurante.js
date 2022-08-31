$(document).ready(function() {

    $('.close, #close').click(function(e) {
        e.preventDefault()
        $('#modal-restaurante').modal('hide')
    })

    $('.btn-save').click(function(e) {
        e.preventDefault()

        var formData = new FormData(document.getElementById("form-restaurante"))
        formData.append('operacao', $('.btn-save').attr('data-operation'))

        $.ajax({
            type: 'POST',
            dataType: 'json',
            assync: true,
            data: formData,
            mineType: "multipart/form-data",
            url: 'src/restaurante/model/save-restaurante.php',
            contentType: false,
            cache: false,
            processData: false,
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