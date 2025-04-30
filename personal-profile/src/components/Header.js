// Header.jsx
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm sticky-top">
                <div className="container">
                    <Link className="navbar-brand fw-bold" to="/">
                        <i className="bi bi-person-circle me-2"></i>
                        My Profile
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link px-3" to="/">
                                    <i className="bi bi-house-door me-1"></i> Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link px-3" to="/about">
                                    <i className="bi bi-person me-1"></i> About Me
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link px-3" to="/education">
                                    <i className="bi bi-mortarboard me-1"></i> Education
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link px-3" to="/projects">
                                    <i className="bi bi-code-square me-1"></i> Projects
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link px-3" to="/contact">
                                    <i className="bi bi-envelope me-1"></i> Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;