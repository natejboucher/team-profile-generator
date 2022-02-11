function validateEmail(emailInput) {
    var emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailInput.match(emailformat)) {
        return true;
    }
    else {

        console.log('Please enter a valid email address.');
        return false;
    }
};

module.exports = validateEmail;