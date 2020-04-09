import { isEmpty, isEmail } from "validator";

const authValidation = ({ username, email, password, name }, type) => {
  const errors = {};
  if (isEmpty(username)) errors["username"] = "Enter username";
  if (isEmpty(password)) errors["password"] = "Enter password";
  if (type === "register") {
    if (isEmpty(email) || !isEmail(email))
      errors["email"] = "Enter valid email address";
    if (isEmpty(name)) errors["name"] = "Enter full name";
  }

  return errors;
};

export default authValidation;
