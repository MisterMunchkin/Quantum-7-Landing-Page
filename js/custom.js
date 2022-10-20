$(function(){
    //Area
    AOS.init({});

    var elem = document.querySelector('.cards');
    var flkty = new Flickity( elem, {
    // options
        wrapAround: true
    });

    function recaptchaCallback() {
        const submitButton = document.getElementById("contact-us-submit-btn");
        submitButton.removeAttribute("disabled");
    }
});