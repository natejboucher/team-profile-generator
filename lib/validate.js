function validateEmail(emailInput) {
  const pass = emailInput.match(
    /\S+@\S+\.\S+/
  );
  if (pass) {
    return true;
  }
  return "Please enter a valid email address.";
};

module.exports = validateEmail;