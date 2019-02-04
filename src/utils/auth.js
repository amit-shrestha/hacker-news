export const auth = {
  isAuthenticated: false,
  /**
   *
   */
  authenticate: () => {
    auth.isAuthenticated = true;
  }
};
