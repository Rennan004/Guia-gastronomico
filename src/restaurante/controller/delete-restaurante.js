$(document).ready(function() {

    $('#table-restaurante').on('click', 'button.btn-delete', function(e) {

        e.preventDefault()

        let ID = `ID=${$(this).attr('id')}`

        Swal.fire({
            title: 'Sistema de rifas',
            text: "Deseja realmente excluir esse registro?",
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Sim',
            cancelButtonText: 'Não'
        }).then((result) => {
            if (result.value) {

                $.ajax({
                    type: 'POST',
                    dataType: 'json',
                    assync: true,
                    data: ID,
                    url: 'src/restaurante/model/delete-restaurante.php',
                    success: function(dados) {
                        Swal.fire({
                            title: 'Guia Gastronomico',
                            text: dados.mensagem,
                            icon: dados.tipo,
                            confirmButtonText: 'OK'
                        })

                        $('#table-restaurante').DataTable().ajax.reload()
                    }
                })


            }
        })
    })
})