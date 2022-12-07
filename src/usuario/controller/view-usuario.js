$(document).ready(function() {

    $('#table-usuario').on('click', 'button.btn-view', function(e) {

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
            url: 'src/usuario/model/view-usuario.php',
            success: function(dado) {
                if (dado.tipo == "success") {
                    $('.modal-body').load('src/usuario/view/form-usuario.html', function() {
                        $('#NOME').val(dado.dados.NOME)
                        $('#NOME').attr('readonly', 'true')
                        $('#EMAIL').val(dado.dados.EMAIL)
                        $('#EMAIL').attr('readonly', 'true')
                        $('#SENHA').val(dado.dados.SENHA)
                        $('#SENHA').attr('readonly', 'true')
                        $('#TIPOUSUARIO_ID').empty()
                        $.ajax({
                            type: 'POST',
                            dataType: 'json',
                            url: 'src/tipo/model/all-tipo.php',
                            success: function(dados) {
                                for (const result of dados) {
                                    if (dado.dados.TIPOUSUARIO_ID == result.ID) {
                                        $('#TIPOUSUARIO_ID').append(`<option value="${result.ID}">${result.NOME}</option>`)
                                    }
                                }
                            }
                        })
                        $('#TIPOUSUARIO_ID').attr('readonly', 'true')
                    })
                    $('.btn-save').hide()
                    $('#modal-usuario').modal('show')
                } else {
                    Swal.fire({ // Inicialização do SweetAlert
                        title: 'Guia Gastronomico', // Título da janela SweetAler
                        text: dado.mensagem, // Mensagem retornada do microserviço
                        type: dado.tipo, // usuario de retorno [success, info ou error]
                        confirmButtonText: 'OK'
                    })
                }
            }
        })

    })
})