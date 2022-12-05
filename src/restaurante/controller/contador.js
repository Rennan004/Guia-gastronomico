$(document).ready(function() {
        // $('.teste').click(function(e) {
        //     e.preventDefault()


        $('#contadores').empty()

        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            assync: true,
            url: 'src/restaurante/model/contador.php',
            success: function(dados) {
                for (const dado of dados) {
                    $('#contadores').append(`
                    <div class="col-lg-12">
                    <div class="row">
                        <div class="col-lg-12">
                            <h2>Veja a quantidade de usuarios de nosso site</h2>
                        </div>
                        <div class="col-lg-6">
                            <div class="row">
                                <div class="col-12">
                                    <div class="count-area-content percentage">
                                        <div class="count-digit">94</div>
                                        <div class="count-title">Succesed Students</div>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="count-area-content">
                                        <div class="count-digit">126</div>
                                        <div class="count-title">Current Teachers</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="row">
                                <div class="col-12">
                                    <div class="count-area-content new-students">
                                        <div class="count-digit">2345</div>
                                        <div class="count-title">New Students</div>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="count-area-content">
                                        <div class="count-digit">32</div>
                                        <div class="count-title">Awards</div>
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