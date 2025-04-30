// Home.jsx
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
    return (
        <div className="container mt-5">
            <div className="row align-items-center">
                <div className="col-lg-6 mb-4 mb-lg-0">
                    <h1 className="display-4 fw-bold text-primary">Welcome to My Portfolio</h1>
                    <p className="lead">I'm a passionate developer crafting modern, responsive web applications with React.</p>
                    <div className="d-flex gap-3 mt-4">
                        <Link to="/projects" className="btn btn-primary btn-lg">
                            View Projects
                        </Link>
                        <Link to="/contact" className="btn btn-outline-primary btn-lg">
                            Contact Me
                        </Link>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="card border-0 bg-light p-4 shadow-sm">
                        <div className="card-body text-center">
                            <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mx-auto mb-4" style={{ width: "150px", height: "150px" }}>
                                <i className="bi bi-person-circle" style={{ fontSize: "4rem" }}></i>
                            </div>
                            <h2 className="h4">Your Name</h2>
                            <p className="text-muted">Web Developer & Designer</p>
                            <p>Based in Cabuyao, Philippines</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="row mt-5">
                <div className="col-12 text-center mb-4">
                    <h2 className="fw-bold">What I Do</h2>
                    <hr className="mx-auto" style={{ width: "50px", height: "3px" }} />
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card h-100 shadow-sm border-0 hover-shadow transition">
                        <div className="card-body text-center p-4">
                            <div className="rounded-circle bg-primary bg-opacity-10 p-3 d-inline-block mb-3">
                                <i className="bi bi-laptop text-primary fs-3"></i>
                            </div>
                            <h5 className="card-title">Web Development</h5>
                            <p className="card-text">Creating responsive and user-friendly web applications using modern technologies.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card h-100 shadow-sm border-0 hover-shadow transition">
                        <div className="card-body text-center p-4">
                            <div className="rounded-circle bg-primary bg-opacity-10 p-3 d-inline-block mb-3">
                                <i className="bi bi-code-square text-primary fs-3"></i>
                            </div>
                            <h5 className="card-title">Front-end Development</h5>
                            <p className="card-text">Building beautiful UIs with React and styling with Bootstrap and CSS.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card h-100 shadow-sm border-0 hover-shadow transition">
                        <div className="card-body text-center p-4">
                            <div className="rounded-circle bg-primary bg-opacity-10 p-3 d-inline-block mb-3">
                                <i className="bi bi-database text-primary fs-3"></i>
                            </div>
                            <h5 className="card-title">Back-end Solutions</h5>
                            <p className="card-text">Developing robust back-end systems with databases and API integrations.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;