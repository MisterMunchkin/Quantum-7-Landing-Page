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

    function enableFormSubmitButton() {
        const response = grecaptcha.getResponse()
        if (response.length !== 0) {
            // `submitBtn` is the id I gave the form submit button
            document.getElementById('contactUsSubmitBtn').disabled = false
        }
    }
    
    document.addEventListener("DOMContentLoaded", () => {
        if (typeof grecaptcha === "object") {
          document.querySelector('.g-recaptcha').dataset.callback = "enableFormSubmitButton";
        } else {
          console.log("Unable to add `data-callback` to grecaptcha as it doesn't exist.");
        }
    });
});