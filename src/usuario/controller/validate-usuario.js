$(document).ready(function() {

    $.ajax({
        type: 'POST',
        dataType: 'json',
        assync: true,
        url: 'src/usuario/model/validate-usuario.php',
        success: function(dados) {
            if (dados.tipo == 'success'){
            Swal.fire({
                title: 'Guia Gastronomico',
                text: dados.mensagem,
                icon: dados.tipo,
                confirmButtonText: 'OK'
            })
        }else{ 
            $(location).attr('href', 'login.html')
            }
     }
})
})