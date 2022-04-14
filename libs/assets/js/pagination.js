$(document).ready(function() {


    $('.pagination-buttons').click(function(e) {
        e.preventDefault()


        let url = $(this).attr('href')


        $('#meetings').removeClass()


        $('#meetings').load(url)

    })
})