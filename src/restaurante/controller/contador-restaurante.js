$(document).ready(function() {
        // $('.teste').click(function(e) {
        //     e.preventDefault()


        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            assync: true,
            url: 'src/restaurante/model/contador.php',
            success: function(dados) {
                console.log(dados)

                $('#restauranteQTD').append(
                    `${dados[0].QTD}`
                )

            },
            error: function(dados) {
                console.log(dados)
            }
        })
    })
    // })