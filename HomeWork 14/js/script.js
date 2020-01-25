$(document).ready(function() {
    function showModal() {
        $('.overlay').animate(
            {
                opacity: 'show'
            }, 600
        );
        $('.modal').css(
            {
                top: '-150%'
            }
        ).animate(
            {
                top: '0',
                opacity: 'show'
            }, 1000
        );
    }

    function hideModal() {
        $('.overlay').animate(
            {
                opacity: 'hide'
            }, 600
        );
        $('.modal').animate(
            {
                top: '-150%',
                opacity: 'hide'
            }, 600
        );
    }

    $('.main_btna').on('click', function(event) {
        showModal();
    });
    
    $('.main_btn').on('click', function(event) {
        showModal();
    });
    $('.main_nav li:eq(1)').on('click', function(event) {
        showModal();
    });
    $('.close').on('click', function(event) {
        hideModal();
    });
});