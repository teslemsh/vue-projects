import router from '../router/index';

export default {

  // User object will let us check authentication status
  user: {
    authenticated: false
  },

  // Send a request to the login URL and save the returned JWT
  login(redirect, data) {
      localStorage.setItem('user_name', data.user);
      localStorage.setItem('password', data.password);

      this.user.authenticated = true;

      // Redirect to a specified route
      if(redirect) {
        router.push(redirect);
      }
  },
  // To log out, we just need to remove the token
  logout() {
    localStorage.removeItem('user_name');
    localStorage.removeItem('password');
    this.user.authenticated = false;

    router.push("login");
  },

  checkAuth() {
    let jwt = localStorage.getItem('user_name');

    if (jwt) {
      this.user.authenticated = true
    }
    else {
      this.user.authenticated = false
    }
  }
}