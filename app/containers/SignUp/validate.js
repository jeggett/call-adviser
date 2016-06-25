const validate = values => {
  // values is an Immutable.Map here
  const errors = {};

  const emailRegexp = /^[^@]+@[^@]+\.[^@]+$/i;
  if (!values.get('email')) {
    errors.email = 'Required';
  } else if (!emailRegexp.test(values.get('email'))) {
    errors.email = 'Enter the email address in the format someone@example.com';
  }

  const passwordRegexp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  if (!values.get('password')) {
    errors.password = 'Required';
  } else if (!passwordRegexp.test(values.get('password'))) {
    errors.password = 'Passwords must have at least 8 characters and contain uppercase letter, lowercase letter, number, and symbols';
  }

  return errors;
};

export default validate;
