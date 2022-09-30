$(document).ready(function() {
    $('.teste').click(function(e) {
        e.preventDefault()


        $('#retorno').empty()

        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            assync: true,
            data: dados,
            url: '../modelo/retorno.php',
            success: function(dado) {
                $('#retorno').append(`
                <div class="col-lg-4 templatemo-item-col all soon">
                <div class="meeting-item">
                    <div class="thumb">
                        <a href="local.html" class="cardzinho"><img src="../model/fotos/${dado.dados.FOTO}" alt=""></a>
                    </div>
                    <div class="down-content">
                        <a href="local.html" class="cardzinho">
                            <h4>${dado.dados.NOME}</h4>
                        </a>
                        <p>${dado.dados.DESCRICAO}.</p>
                    </div>
                </div>
            </div>`)
            }
        })
    })
})