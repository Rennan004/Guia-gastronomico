$(document).ready(function() {
        // $('.teste').click(function(e) {
        //     e.preventDefault()


        $('#retorno-index').empty()

        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            assync: true,
            url: 'src/restaurante/model/retorno.php',
            success: function(dados) {
                for (const dado of dados) {
                    $('#retorno-index').append(`
                    
                    <div class="col-lg-6">
                            <div class="meeting-item">
                                
                        
                                    <div class="thumb">
                                    <a href="" class="cardzinho"><img src="src/restaurante/model/fotos/${dado.FOTO}" alt="" style="height: 13rem;"></a>
                                </div>
                                
                                <div class="down-content">
                                    <div class="date">

                                    </div>
                                    <a href="" id="${dado.ID}" class="cardzinho restaurante">
                                        <h4>${dado.NOME}</h4>
                                    </a>
                                    <p>${dado.DESCRICAO}</p>
                                </div>
                            </div>
                        </div>`)
                }
            }
        })
    })
    // })