$(document).ready(function() {
        // $('.teste').click(function(e) {
        //     e.preventDefault()


        $('#retorno').empty()

        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            assync: true,
            url: 'src/restaurante/model/retorno.php',
            success: function(dados) {
                for (const dado of dados) {
                    $('#retorno-populares').append(`
                    < <div class="owl-courses-item owl-carousel">
                    <div class="item">
                        <img src="src/restaurante/model/fotos/${dado.FOTO} alt="">
                        <div class="down-content">
                            <h4>Sim</h4>
                            <div class="info">
                                <div class="row">
                                    <div class="col-8">
                                        <ul>
                                            <li><i class="fa fa-star"></i></li>
                                            <li><i class="fa fa-star"></i></li>
                                            <li><i class="fa fa-star"></i></li>
                                            <li><i class="fa fa-star"></i></li>
                                            <li><i class="fa fa-star"></i></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`)
                }
            }
        })
    })
    // })