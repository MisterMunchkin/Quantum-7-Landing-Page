$(function(){
    AOS.init({
    });

    var recaptcha = document.forms["quantum-cleaning-contactus-form"]["g-recaptcha-response"];
    recaptcha.required = true;
    recaptcha.oninvalid = function(e) {
        //https://freefrontend.com/css-notifications/
    }
});