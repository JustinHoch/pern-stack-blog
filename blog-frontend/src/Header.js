import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>PERN Stack Blog</h1>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">Posts</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
      </ul>
    </nav>
    <div class="gradient-line"></div>
  </header>
);

export default Header;