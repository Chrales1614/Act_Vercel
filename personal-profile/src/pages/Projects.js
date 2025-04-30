
function Projects() {
    return (
        <div className="container my-5">
            <h1 className="text-center mb-5 fw-bold">My Projects</h1>
            
            <div className="row">
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card shadow-sm h-100 border-0 overflow-hidden">
                        <div className="bg-primary bg-opacity-10 p-4 text-center">
                            <i className="bi bi-list-check text-primary" style={{ fontSize: "4rem" }}></i>
                        </div>
                        <div className="card-body p-4">
                            <h4 className="card-title text-primary">Task List App</h4>
                            <div className="mb-3">
                                <span className="badge bg-primary me-1">React</span>
                                <span className="badge bg-secondary me-1">Firebase</span>
                                <span className="badge bg-info">Real-time</span>
                            </div>
                            <p className="card-text">
                                A to-do application built with React and Firebase. Features include real-time updates, 
                                user authentication, task categorization, and responsive design.
                            </p>
                        </div>
                        <div className="card-footer bg-white border-0 p-4">
                            <div className="d-flex gap-2">
                                <a href="#" className="btn btn-primary">
                                    <i className="bi bi-eye me-1"></i> Live Demo
                                </a>
                                <a href="#" className="btn btn-outline-dark">
                                    <i className="bi bi-github me-1"></i> Code
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card shadow-sm h-100 border-0 overflow-hidden">
                        <div className="bg-primary bg-opacity-10 p-4 text-center">
                            <i className="bi bi-hospital text-primary" style={{ fontSize: "4rem" }}></i>
                        </div>
                        <div className="card-body p-4">
                            <h4 className="card-title text-primary">Clinic Management System</h4>
                            <div className="mb-3">
                                <span className="badge bg-primary me-1">PHP</span>
                                <span className="badge bg-secondary me-1">MySQL</span>
                                <span className="badge bg-info">Bootstrap</span>
                            </div>
                            <p className="card-text">
                                A comprehensive clinic management system for handling SOAP notes, patient records, appointments, 
                                and billing. Features a user-friendly interface for healthcare providers.
                            </p>
                        </div>
                        <div className="card-footer bg-white border-0 p-4">
                            <div className="d-flex gap-2">
                                <a href="#" className="btn btn-primary">
                                    <i className="bi bi-eye me-1"></i> Live Demo
                                </a>
                                <a href="#" className="btn btn-outline-dark">
                                    <i className="bi bi-github me-1"></i> Code
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card shadow-sm h-100 border-0 overflow-hidden">
                        <div className="bg-primary bg-opacity-10 p-4 text-center">
                            <i className="bi bi-person-vcard text-primary" style={{ fontSize: "4rem" }}></i>
                        </div>
                        <div className="card-body p-4">
                            <h4 className="card-title text-primary">Portfolio Website</h4>
                            <div className="mb-3">
                                <span className="badge bg-primary me-1">React</span>
                                <span className="badge bg-secondary me-1">Bootstrap</span>
                                <span className="badge bg-info">Responsive</span>
                            </div>
                            <p className="card-text">
                                A personal portfolio website built with React and Bootstrap to showcase projects and skills.
                                Features responsive design, smooth animations, and a clean, modern UI.
                            </p>
                        </div>
                        <div className="card-footer bg-white border-0 p-4">
                            <div className="d-flex gap-2">
                                <a href="#" className="btn btn-primary">
                                    <i className="bi bi-eye me-1"></i> Live Demo
                                </a>
                                <a href="#" className="btn btn-outline-dark">
                                    <i className="bi bi-github me-1"></i> Code
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;