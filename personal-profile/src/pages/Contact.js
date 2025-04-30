import 'bootstrap/dist/css/bootstrap.min.css';

function Contact() {
    return (
        <div className="container mt-5">
            <div className="card shadow">
                <div className="card-header bg-primary text-white">
                    <h1 className="text-center">Contact</h1>
                </div>
                <div className="card-body">
                    <p className="lead">
                        <strong>Email:</strong> delgadocharles1614@example.com
                    </p>
                    <p className="lead">
                        <strong>GitHub:</strong>{' '}
                        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                            github.com/yourusername
                        </a>
                    </p>
                    <p className="lead">
                        <strong>LinkedIn:</strong>{' '}
                        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                            linkedin.com/in/yourprofile
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Contact;