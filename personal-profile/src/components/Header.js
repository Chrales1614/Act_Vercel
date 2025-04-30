import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <ul style={{ display: 'flex', gap: '10px', listStyle: 'none' }}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Me</Link></li>
          <li><Link to="/education">Education</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
