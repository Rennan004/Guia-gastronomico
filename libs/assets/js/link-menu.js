$(document).ready(function() {

    // Iremos selecionar todos os elementos da classe .nav-link
    $('.meetings-page').click(function(e) {
        e.preventDefault() //Anula as funcionalidades prioritário do elemento HTML

        // Criar uma variável local que receberá o link que tem de ser aberto
        let url = $(this).attr('href')

        //Limpar a nossa div chamada content
        $('#meetings').empty()

        //Atribuir um novo conteúdo
        $('#detalhes').load(url)

    })
})