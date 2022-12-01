$(document).ready(function() {
    $('.restaurante').click(function(e) {
        e.preventDefault()


        $('#retorno-local').empty()

        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            assync: true,
            url: 'src/restaurante/model/retorno-local.php',
            success: function(dados) {
                for (const dado of dados) {
                    $('#retorno-local').append(`
                    <div class="meeting-single-item">
                                <div class="thumb">
                                    <img src="src/restaurante/model/fotos/${dado.FOTO}" id="FOTO">
                                </div>
                                <div class="down-content">

                                    <h4 id="ESTABELECIMENTO">${dado.NOME}</h4>

                                    <p class="description" id="DESCRICAO">
                                        <b>Descrição</b> - ${dado.DESCRICAO}.
                                    </p>
                                    <div class="row">
                                        <div class="col-lg-4">
                                            <div class="hours">
                                                <h5>Horario de funcionamento</h5>
                                                <p id="ABERTURA">${dado.HORARIO}</p>
                                                <p id="FECHAMENTO">${dado.HORARIO}</p>
                                            </div>
                                        </div>
                                        <div class="col-lg-4">
                                            <div class="location" id="LOCALIZACAO_LOCAL">
                                                <h5>Localização</h5>
                                                <p id="endereco">${dado.LOGRADOURO},
                                                    <p id="CIDADE">${dado.CIDADE}</p>
                                                    <p id="ESTADO">${dado.UF}</p>
                                                    <p id="CEP">${dado.CEP}</p>
                                            </div>
                                        </div>
                                        <div class="col-lg-4">
                                            <div class="book now" id="TELEFONE">
                                                <h5>Telefone</h5>
                                                <p id="telefone">${dado.TELEFONE1}</p><br>
                                                <p id="telefone">${dado.TELEFONE2}</p>
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="share">
                                                <h5>Redes sociais:</h5>
                                                <ul>
                                                    <li><a href="${dado.FACEBOOK}">Facebook</a>,</li>
                                                    <li><a href="${dado.INSTAGRAM}">Instagram</a>,</li>
                                                </ul>
                                            </div>
                                        </div>`)
                }
            }
        })
    })
})