async function removeEmailDomain(email: string) {
  const atIndex = email.indexOf("@");
  if (atIndex !== -1) {
    return email.substring(0, atIndex);
  }
  return email;
}
