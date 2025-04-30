import 'bootstrap/dist/css/bootstrap.min.css';

function About() {
    return (
        <div className="container mt-5">
            <div className="card shadow">
                <div className="card-header bg-primary text-white">
                    <h1>About Me</h1>
                </div>
                <div className="card-body">
                    <p className="lead">
                        I am a web developer passionate about React and building cool stuff.
                    </p>
                    <h5>Hobbies:</h5>
                    <ul className="list-group">
                        <li className="list-group-item">Coding</li>
                        <li className="list-group-item">Gaming</li>
                        <li className="list-group-item">Photography</li>
                    </ul>
                </div>
                <div className="card-footer text-muted">
                    <p>Feel free to connect with me on LinkedIn or GitHub!</p>
                </div>
            </div>
        </div>
    );
}

export default About;