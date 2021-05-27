const SignupPage = () => (
  <main>
    <h2>Sign Up</h2>

    <form id="signup-form">
      <label for="first-name">First Name</label><br />
      <input type="text" id="first-name" /><br />

      <label for="last-name">Last Name</label><br />
      <input type="text" id="last-name" /><br />

      <label for="email">Email</label><br />
      <input type="text" id="email" /><br />

      <label for="username">Username</label><br />
      <input type="text" id="username" /><br />

      <label for="password">Password</label><br />
      <input type="text" id="password" /><br />

      <label for="confirm-password">Confirm Password</label><br />
      <input type="text" id="confirm-password" /><br />

      <button type="submit" className="button">Sign Up</button>
    </form>
  </main>
);

export default SignupPage;