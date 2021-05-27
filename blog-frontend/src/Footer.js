import { Link } from 'react-router-dom';

const Footer = () => (
  <footer>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">Posts</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/">Login</Link></li>
        <li><Link to="/">Signup</Link></li>
      </ul>
    </nav>
    <p>&copy;2021 Justin Hochschild</p>
  </footer>
);

export default Footer;