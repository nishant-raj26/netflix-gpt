export const checkValidData = (email, password) => {
  const isemailValid = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/.test(email);
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  if (!isemailValid) return "Email id is not valid";
  if (!isPasswordValid) return "Password is not valid";
  return null;
};
