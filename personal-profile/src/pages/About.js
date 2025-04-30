// About.jsx
import 'bootstrap/dist/css/bootstrap.min.css';

function About() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-10 mx-auto">
                    <div className="card border-0 shadow-sm">
                        <div className="card-header bg-primary text-white p-4">
                            <h1 className="m-0 fw-bold">About Me</h1>
                        </div>
                        <div className="card-body p-4 p-lg-5">
                            <div className="row">
                                <div className="col-md-4 mb-4 mb-md-0">
                                    <div className="text-center">
                                        <div className="rounded-circle bg-light p-2 d-inline-block mb-3" style={{ width: "200px", height: "200px" }}>
                                            <i className="bi bi-person-circle text-primary" style={{ fontSize: "8rem" }}></i>
                                        </div>
                                        <h4>Your Name</h4>
                                        <p className="text-muted">Web Developer</p>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <p className="lead mb-4">
                                        I am a passionate web developer specializing in React and building engaging, user-friendly applications.
                                        With a strong foundation in front-end technologies and a keen eye for design, I create seamless digital experiences.
                                    </p>
                                    
                                    <h4 className="mb-3">Skills</h4>
                                    <div className="mb-4">
                                        <div className="d-flex justify-content-between mb-1">
                                            <span>React.js</span>
                                            <span>90%</span>
                                        </div>
                                        <div className="progress" style={{ height: "10px" }}>
                                            <div className="progress-bar bg-primary" role="progressbar" style={{ width: "90%" }}></div>
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <div className="d-flex justify-content-between mb-1">
                                            <span>HTML/CSS</span>
                                            <span>95%</span>
                                        </div>
                                        <div className="progress" style={{ height: "10px" }}>
                                            <div className="progress-bar bg-primary" role="progressbar" style={{ width: "95%" }}></div>
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <div className="d-flex justify-content-between mb-1">
                                            <span>JavaScript</span>
                                            <span>85%</span>
                                        </div>
                                        <div className="progress" style={{ height: "10px" }}>
                                            <div className="progress-bar bg-primary" role="progressbar" style={{ width: "85%" }}></div>
                                        </div>
                                    </div>
                                    
                                    <h4 className="mt-4 mb-3">Hobbies & Interests</h4>
                                    <div className="row">
                                        <div className="col-6 col-md-4 mb-3">
                                            <div className="d-flex align-items-center">
                                                <i className="bi bi-code-slash text-primary me-2 fs-4"></i>
                                                <span>Coding</span>
                                            </div>
                                        </div>
                                        <div className="col-6 col-md-4 mb-3">
                                            <div className="d-flex align-items-center">
                                                <i className="bi bi-controller text-primary me-2 fs-4"></i>
                                                <span>Gaming</span>
                                            </div>
                                        </div>
                                        <div className="col-6 col-md-4 mb-3">
                                            <div className="d-flex align-items-center">
                                                <i className="bi bi-camera text-primary me-2 fs-4"></i>
                                                <span>Photography</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;