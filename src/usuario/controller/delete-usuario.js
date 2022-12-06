$(document).ready(function() {

    $('#table-usuario').on('click', 'button.btn-delete', function(e) {

        e.preventDefault()

        let ID = `ID=${$(this).attr('id')}`

        Swal.fire({
            title: 'Guia Gastronomico',
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
                    url: 'src/usuario/model/delete-usuario.php',
                    success: function(dados) {
                        Swal.fire({
                            title: 'Guia Gastronomico',
                            text: dados.mensagem,
                            icon: dados.tipo,
                            confirmButtonText: 'OK'
                        })

                        $('#table-usuario').DataTable().ajax.reload()
                    }
                })


            }
        })
    })
})