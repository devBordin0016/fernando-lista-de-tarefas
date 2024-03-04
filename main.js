$(document).ready(function() {

    $('form').on('submit', function(e) {

        e.preventDefault();

        const nomeTarefa = $('#nome-da-tarefa').val();
        const novoItem = $('<li></li>');
        
        $(`<li>${nomeTarefa}</li>`).appendTo(novoItem);
        $(novoItem).appendTo('ul');

        $("ul").on('click', 'li', function() {
            $(this).toggleClass("linha-meio");
            $(".linha-meio").css('text-decoration', 'line-through');
        })

    });

});