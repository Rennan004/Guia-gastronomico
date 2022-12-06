$(document).ready(function() {

    $('#table-restaurante').on('click', 'button.btn-edit', function(e) {

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
            url: 'src/restaurante/model/view-restaurante.php',
            success: function(dado) {
                if (dado.tipo == "success") {
                    $('.modal-body').load('src/restaurante/view/form-restaurante.html', function() {
                        $('#NOME').val(dado.dados.NOME)
                        $('#DESCRICAO').val(dado.dados.DESCRICAO)
                        $('#CEP').val(dado.dados.CEP)
                        $('#LOGRADOURO').val(dado.dados.LOGRADOURO)
                        $('#BAIRRO').val(dado.dados.BAIRRO)
                        $('#CIDADE').val(dado.dados.CIDADE)
                        $('#UF').val(dado.dados.UF)
                        $('#NUMERO').val(dado.dados.NUMERO)
                        $('#HORARIO_IN').val(dado.dados.HORARIO_IN)
                        $('#HORARIO_FIM').val(dado.dados.HORARIO_FIM)
                        $('#TELEFONE1').val(dado.dados.TELEFONE1)
                        $('#CELULAR').val(dado.dados.TELEFONE2)
                        $('#FACEBOOK').val(dado.dados.FACEBOOK)
                        $('#INSTAGRAM').val(dado.dados.INSTAGRAM)
                        $('#IFOOD').val(dado.dados.IFOOD)
                        $('#ID').val(dado.dados.ID)
                        
                    })
                    $('.btn-save').removeAttr('data-operation', 'insert')
                    $('.btn-save').show()
                    $('#modal-restaurante').modal('show')
                } else {
                    Swal.fire({ // Inicialização do SweetAlert
                        title: 'Sistema de Rifas', // Título da janela SweetAlert
                        text: dado.mensagem, // Mensagem retornada do microserviço
                        type: dado.tipo, // Tipo de retorno [success, info ou error]
                        confirmButtonText: 'OK'
                    })
                }
            }
        })

    })
})