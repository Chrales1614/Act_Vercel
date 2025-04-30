import 'bootstrap/dist/css/bootstrap.min.css';

function Projects() {
    return (
        <div className="container my-5">
            <h1 className="text-center mb-4">Projects</h1>
            <div className="row">
                <div className="col-md-6 mb-4">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title">Task List App</h5>
                            <p className="card-text">
                                A to-do app using React and Firebase. It allows users to manage tasks efficiently with real-time updates.
                            </p>
                            <a href="#" className="btn btn-primary">
                                View Project
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mb-4">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title">Clinic Management System</h5>
                            <p className="card-text">
                                Built with PHP and MySQL for handling SOAP notes and managing patient records seamlessly.
                            </p>
                            <a href="#" className="btn btn-primary">
                                View Project
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mb-4">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title">Portfolio Website</h5>
                            <p className="card-text">
                                A personal portfolio website built with React and Bootstrap to showcase projects and skills.
                            </p>
                            <a href="#" className="btn btn-primary">
                                View Project
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;