export default function validateInfo(values) {
  let errors = {};

  if (!values.username.trim()) {
    errors.username = "Username Required";
  }

  if (!values.email) {
    errors.email = "Email Required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Invalid Email";
  }

  if (!values.password) {
    errors.password = "Password Required";
  } else if (values.password.length < 6) {
    errors.password = "Password should be of 6 or more Characters";
  }

  if (!values.password2) {
    errors.password2 = "Password Required";
  } else if (values.password2 !== values.password) {
    errors.password = "Password do not match";
  }

  return errors;
}
