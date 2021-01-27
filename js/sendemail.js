Splitting();
$('.signup').submit(function (event) {
    event.preventDefault();

    var emailText = $('.email').val();
    $(".field").append("<p data-splitting='chars'>" + emailText + "</p>");
    Splitting();
    $("#wrap").addClass("plunge");
    setTimeout(function () {
        $('.email').val('');
        $(".field p").remove();
        $("#wrap").removeClass("plunge");
    }, 4000);
});