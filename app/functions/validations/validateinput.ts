export function validateEmailFormat(email: any) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let valid = false;
  emailRegex.test(email) ? (valid = true) : alert("Email is wrong format");
  return valid;
}

export function validatePasswordFormat(
  password: string,
  confirmPassword?: string
) {
  let validMatch = false;
  let validDigits = false;

  if (password != confirmPassword) alert("Password dose not match");
  else {
    validMatch = true;
  }

  if (password.length < 6) alert("Password must 6 digits or mor");
  else {
    validDigits = true;
  }

  if (validDigits && validDigits) return true;
  else return false;
}
