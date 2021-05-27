const LoginPage = () => (
  <main>
    <h2>Login</h2>

    <form className="login-form">
      <label for="username">Username:</label><br />
      <input type="text" id="username" name="username"/><br />
      <label for="password">Password:</label><br />
      <input type="password" id="password" name="password" value="" /><br />
      <button type="submit" className="button">Login</button>
    </form>
  </main>
);

export default LoginPage;