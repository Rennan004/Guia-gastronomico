$(document).ready(function() {
        // $('.teste').click(function(e) {
        //     e.preventDefault()


        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            assync: true,
            url: 'src/usuario/model/contador.php',
            success: function(dados) {
                console.log(dados)

                $('#usuariosQTD').append(
                    `${dados[0].QTD}`
                )

            },
            error: function(dados) {
                console.log(dados)
            }
        })
    })
    // })