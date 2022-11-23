$(document).ready(function() {

    $('#table-restaurante').on('click', 'button.btn-view', function(e) {

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
                        $('#NUMERO').val(dado.dados.NUMERO)
                        $('#HORARIO').val(dado.dados.HORARIO)
                        $('#TELEFONE1').val(dado.dados.TELEFONE1)
                        $('#TELEFONE2').val(dado.dados.TELEFONE2)
                        $('#FACEBOOK').val(dado.dados.FACEBOOK)
                        $('#INSTAGRAM').val(dado.dados.INSTAGRAM)
                        $('#IFOOD').val(dado.dados.IFOOD)
                        $('#FOTO').val(dado.dados.FOTO)
                        $('#NOME').attr('readonly', 'true')
                        $('#DESCRICAO').attr('readonly', 'true')
                        $('#CEP').attr('readonly', 'true')
                        $('#LOGRADOURO').attr('readonly', 'true')
                        $('#BAIRRO').attr('readonly', 'true')
                        $('#NUMERO').attr('readonly', 'true')
                        $('#HORARIO').attr('readonly', 'true')
                        $('#TELEFONE1').attr('readonly', 'true')
                        $('#TELEFONE2').attr('readonly', 'true')
                        $('#FACEBOOK').attr('readonly', 'true')
                        $('#INSTAGRAM').attr('readonly', 'true')
                        $('#IFOOD').attr('readonly', 'true')
                        $('#FOTO').attr('readonly', 'true')
                    })
                    $('.btn-save').hide()
                    $('#modal-restaurante').modal('show')
                } else {
                    Swal.fire({ // Inicialização do SweetAlert
                        title: 'e-Rifa', // Título da janela SweetAler
                        text: dado.mensagem, // Mensagem retornada do microserviço
                        type: dado.tipo, // usuario de retorno [success, info ou error]
                        confirmButtonText: 'OK'
                    })
                }
            }
        })

    })
})