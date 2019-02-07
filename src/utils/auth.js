export const auth = {
  isAuthenticated: false,
  /**
   *
   */
  authenticate: () => {
    auth.isAuthenticated = true;
  },

  logout: cb => {
    auth.isAuthenticated = false;
    cb();
  }
};
