const Validator = require('validator');
const isEmpty = require('is-empty');

module.exports = function validateRegisterInput(data) {
  const errors = {};

  // Save empty fields to strings
  const name = !isEmpty(data.name) ? data.name : '';
  const email = !isEmpty(data.email) ? data.email : '';
  const password = !isEmpty(data.password) ? data.password : '';
  const password2 = !isEmpty(data.password2) ? data.password2 : '';

  // Name checks
  if (Validator.isEmpty(name)) {
    errors.name = 'Name field is required';
  } else if (!Validator.isLength(name, { min: 3, max: 30 })) {
    errors.name = 'Name must be at least 3 characters long.';
  }

  // Email checks
  if (Validator.isEmpty(email)) {
    errors.email = 'Email field is required';
  } else if (!Validator.isEmail(email)) {
    errors.email = 'Email is invalid';
  }

  // Password checks
  if (Validator.isEmpty(password)) {
    errors.password = 'Password field is required';
  }
  if (Validator.isEmpty(password2)) {
    errors.password2 = 'Confirm password field is required';
  }
  if (!Validator.isLength(password, { min: 6, max: 30 })) {
    errors.password = 'Password must be at least 6 characters';
  }
  if (!Validator.equals(password, password2)) {
    errors.password2 = 'Passwords must match';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
