$(document).ready(function() {
    $('.btn-send').click(function(e) {
        e.preventDefault()

        let dados = $('#form').serialize()

        $('#retorno').empty()

        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            assync: true,
            data: dados,
            url: '../modelo/retorno.php',
            success: function(dados) {
                $('#retorno').append(`
                <div class="col-lg-4 templatemo-item-col all soon">
                <div class="meeting-item">
                    <div class="thumb">
                        <a href="local.html" class="cardzinho"><img src="../model/fotos/${dados.tipo}" alt=""></a>
                    </div>
                    <div class="down-content">
                        <a href="local.html" class="cardzinho">
                            <h4>${dados.tipo}</h4>
                        </a>
                        <p>${dados.tipo}.</p>
                    </div>
                </div>
            </div>`)
            }
        })
    })
})