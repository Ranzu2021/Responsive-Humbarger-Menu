$(document).ready(function(){
    $('.hamburger').click(function(){
        $('.hamburger').toggleClass('active');
        $('body').toggleClass('active');
    });
});