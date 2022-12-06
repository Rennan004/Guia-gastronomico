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
                        $('#NOME').attr('readonly', 'true')
                        $('#DESCRICAO').val(dado.dados.DESCRICAO)
                        $('#DESCRICAO').attr('readonly', 'true')
                        $('#CEP').val(dado.dados.CEP)
                        $('#CEP').attr('readonly', 'true')
                        $('#LOGRADOURO').val(dado.dados.LOGRADOURO)
                        $('#LOGRADOURO').attr('readonly', 'true')
                        $('#BAIRRO').val(dado.dados.BAIRRO)
                        $('#BAIRRO').attr('readonly', 'true')
                        $('#CIDADE').val(dado.dados.CIDADE)
                        $('#CIDADE').attr('readonly', 'true')
                        $('#UF').val(dado.dados.UF)
                        $('#UF').attr('readonly', 'true')
                        $('#NUMERO').val(dado.dados.NUMERO)
                        $('#NUMERO').attr('readonly', 'true')
                        $('#HORARIO_IN').val(dado.dados.HORARIO_IN)
                        $('#HORARIO_IN').attr('readonly', 'true')
                        $('#HORARIO_FIM').val(dado.dados.HORARIO_FIM)
                        $('#HORARIO_FIM').attr('readonly', 'true')
                        $('#TELEFONE1').val(dado.dados.TELEFONE1)
                        $('#TELEFONE1').attr('readonly', 'true')
                        $('#CELULAR').val(dado.dados.TELEFONE2)
                        $('#CELULAR').attr('readonly', 'true')
                        $('#FACEBOOK').val(dado.dados.FACEBOOK)
                        $('#FACEBOOK').attr('readonly', 'true')
                        $('#INSTAGRAM').val(dado.dados.INSTAGRAM)
                        $('#INSTAGRAM').attr('readonly', 'true')
                        $('#IFOOD').val(dado.dados.IFOOD)
                        $('#IFOOD').attr('readonly', 'true')
                        $('#content-foto').addClass('d-none')

                        $('.olhar-foto').append(`
                            <img src="src/restaurante/model/fotos/${dado.dados.FOTO}">
                        `)
                        
                    })
                    $('.btn-save').hide()
                    $('#modal-restaurante').modal('show')
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