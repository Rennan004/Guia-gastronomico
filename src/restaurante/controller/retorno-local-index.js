$(document).ready(function() {
    $('#retorno-index').on('click', 'a.restaurante', function(e) {
        e.preventDefault()

        let ID = `ID=${$(this).attr('id')}`

        $('#retorno-index').empty()
        $('.main-banner').hide()
        $('.upcoming-meetings').hide()
        $('.apply-now').hide()
        $('.our-courses').hide()
        $('.section-heading').hide()
        $('.our-facts').hide()
        $('.contact-us').hide()



        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            assync: true,
            data: ID,
            url: 'src/restaurante/model/retorno-local.php',
            success: function(dados) {
                for (const dado of dados) {
                    $('#retorno-index-local').append(`
            
                <section class="meetings-page" style="width: 100%;" id="meetings">
                <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="row">
                            <div class="col-lg-12">
                        <div class="meeting-single-item">
                                    <div class="thumb">
                                        <img src="src/restaurante/model/fotos/${dado.FOTO}" id="FOTO" style="height: 30rem; background-size: cover;">
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
                                                    <p id="endereco">${dado.LOGRADOURO},
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
                                                        <li><a href="${dado.FACEBOOK}">Facebook</a>,</li>
                                                        <li><a href="${dado.INSTAGRAM}">Instagram</a>,</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            </div>
                                            </div>
                                            <div class="col-lg-12">
                    <div class="main-button-red">
                        <a href="index.html">Voltar</a>
                    </div>
                </div>
            
            
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="footer">
                        <p>Copyright © 2022 R3S Co., Ltd. All Rights Reserved.
                            <br>Design: <a href="https://github.com/Rennan004/" target="_parent" title="website templates">Github</a></p>
                    </div>
                </section>
                           
                       

           
       `)
                }
            }
        })
    })
})