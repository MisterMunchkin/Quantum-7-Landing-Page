$(function(){
    //Area
    AOS.init({});

    //Netlify Recaptcha
    var recaptcha = document.forms["quantum-cleaning-contactus-form"]["g-recaptcha-response"];
    // recaptcha.required = true;
    // recaptcha.oninvalid = function(e) {
    //     //https://freefrontend.com/css-notifications/
    // }

    var elem = document.querySelector('.cards');
    var flkty = new Flickity( elem, {
    // options
        wrapAround: true
    });

    var onloadCallback = function () {
        var response = grecaptcha.getResponse('contact-us-recaptcha');

        if (response.length == 0) {
            alert('captcha invalid');
        } else {
            alert('captcha valid');
        }
    }
});