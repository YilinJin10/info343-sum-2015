"use strict";

//initialize Parse library with your application ID and your app's JavaScript library key
Parse.initialize('GGIpsSFMYz1m4kvbLd7rR20Dnzxd6wcemawMKN37', 'bP89lZM77ApITa7srUY276FnqW2irgWFV4WrdrmR');

/**
 * Shows an error in an element on the page with the class 'error-message'
 * @param err {Object} the error to be shown
 */
function showError(err) {
    $('.error-message').html(err.message).fadeIn();
}

/**
 * Clears any currently showing error
 */
function clearError() {
    $('.error-message').fadeOut().empty();
}
