/**
 * Get Login Credentials from Local Storage.
 */
export const getCredentials = () => {
  const loginCredentialsUnparsed = window.localStorage.getItem(
    'loginCredentials'
  );
  const loginCredentialsParsed = loginCredentialsUnparsed
    ? JSON.parse(loginCredentialsUnparsed)
    : [];

  return loginCredentialsParsed;
};

/**
 * Save Login Credentials to Local Storage.
 *
 * @param {Array} credentials
 */
export const saveCredentials = credentials => {
  window.localStorage.setItem('loginCredentials', JSON.stringify(credentials));
};
