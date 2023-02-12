jQuery(document).ready(function( $ ){

// -----------------------Part one----------------------------


$('#articles-button').click(function () {
    $('#articles-back-button').slideToggle(500);
});
$(window).resize(function () {
    if ($(window).width() > 500) {
        $('#articles-back-button').removeAttr('style');
    }
});


// ------------------------------------------------------------

$('.articles-button').click(function () {
    $('.articles-content').slideToggle(500);
});
$(window).resize(function () {
    if ($(window).width() > 500) {
        $('.articles-content').removeAttr('style');
    }
});

// ----------------------------------------------------------------

$('#articles-button').click(function() {
    $("#articles-button").css("display", "none");
    $("#guides-block").css("display", "none");
    $("#qa-block").css("display", "none");
});

$('#category-button-back').click(function() {
    location.reload();
});


// ------------------Part two----------------------------------


$('#guides-button').click(function () {
    $('#guides-back-button').slideToggle(500);
});
$(window).resize(function () {
    if ($(window).width() > 500) {
        $('#guides-back-button').removeAttr('style');
    }
});


// ------------------------------------------------------------

$('.guides-button').click(function () {
    $('.guides-content').slideToggle(500);
});
$(window).resize(function () {
    if ($(window).width() > 500) {
        $('.guides-content').removeAttr('style');
    }
});

// ----------------------------------------------------------------

$('#guides-button').click(function() {
    $("#articles-button").css("display", "none");
    $("#guides-button").css("display", "none");
    $("#qa-block").css("display", "none");
});

$('#guides-button-back').click(function() {
    location.reload();
});


// ------------------------Part three-------------------------------


$('#qa-button').click(function () {
    $('#qa-back-button').slideToggle(500);
});
$(window).resize(function () {
    if ($(window).width() > 500) {
        $('#qa-back-button').removeAttr('style');
    }
});


// ------------------------------------------------------------

$('.qa-button').click(function () {
    $('.qa-content').slideToggle(500);
});
$(window).resize(function () {
    if ($(window).width() > 500) {
        $('.qa-content').removeAttr('style');
    }
});

// ----------------------------------------------------------------

$('#qa-button').click(function() {
    $("#articles-button").css("display", "none");
    $("#guides-button").css("display", "none");
    $("#qa-button").css("display", "none");
});

$('#qa-button-back').click(function() {
    location.reload();
});



});