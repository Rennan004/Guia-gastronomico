$(document).ready(function() {
    $('#retorno').on('click', 'a.restaurante', function(e) {
        e.preventDefault()

        let ID = `ID=${$(this).attr('id')}`

        $('#retorno').empty()
        $('.pagination').empty()
        $('.filters').empty()

        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            assync: true,
            data: ID,
            url: 'src/restaurante/model/retorno-local.php',
            success: function(dados) {
                for (const dado of dados) {
                    $('#retorno').append(`
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="row">
                        <div class="col-lg-12">
                    <div class="meeting-single-item">
                                <div class="thumb">
                                    <img src="src/restaurante/model/fotos/${dado.FOTO}" id="FOTO" style="height: auto; background-size: cover; object-fit: cover;">
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
                                                <p id="ABERTURA">${dado.HORARIO_IN}</p>
                                                <p id="FECHAMENTO">${dado.HORARIO_FIM}</p>
                                            </div>
                                        </div>
                                        <div class="col-lg-4">
                                            <div class="location" id="LOCALIZACAO_LOCAL">
                                                <h5>Localização</h5>
                                                <p id="endereco">${dado.LOGRADOURO}, ${dado.NUMERO},
                                                    <p id="CIDADE">${dado.CIDADE}</p>
                                                    <p id="ESTADO">${dado.UF}</p>
                                                    <p id="CEP">${dado.CEP}</p>
                                            </div>
                                        </div>
                                        <div class="col-lg-4">
                                            <div class="book now" id="TELEFONE">
                                                <h5>Telefone</h5>
                                                <p id="telefone">${dado.TELEFONE1}</p>
                                                <p id="telefone">${dado.TELEFONE2}</p>
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="share">
                                                <h5>Redes sociais:</h5>
                                                <ul>
                                                    <li><a target="_blank" href="${dado.FACEBOOK}">Facebook</a>,</li>
                                                    <li><a target="_blank" href="${dado.INSTAGRAM}">Instagram</a>,</li>
                                                    <li><a target="_blank" href="${dado.IFOOD}">IFood</a>.</li>
                                                </ul>
                                            </div>
                                        </div>
                                        </div>
                                        </div>
                                        <div class="col-lg-12">
                <div class="main-button-red">
                    <a href="gastronomia.html">Voltar</a>
                </div>
            </div>`)
                }
            }
        })
    })
})