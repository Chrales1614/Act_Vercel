import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
    return (
        <div className="container mt-5">
            <div className="text-center">
                <h1 className="display-4">Welcome!</h1>
                <p className="lead">This is my personal profile site built with React.js and styled with Bootstrap.</p>
            </div>
            <div className="row mt-4">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">About Me</h5>
                            <p className="card-text">I am a passionate developer with experience in building modern web applications.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Projects</h5>
                            <p className="card-text">Check out my portfolio to see some of the projects I have worked on.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Contact</h5>
                            <p className="card-text">Feel free to reach out to me via email or LinkedIn.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;