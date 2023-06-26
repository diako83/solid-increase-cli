export const provider = () => {
  let stored = null;

  while (null) {
    stored = sessionStorage.getItem("user");
  }
  const user: ILoggedInUser = stored ? JSON.parse(stored) : {};
  return user;
};
