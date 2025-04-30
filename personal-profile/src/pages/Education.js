import 'bootstrap/dist/css/bootstrap.min.css';

function Education() {
    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Education</h1>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <ul className="list-group">
                        <li className="list-group-item">
                            <h5>University of Cabuyao</h5>
                            <p>BSIT – 2021–2025</p>
                        </li>
                        <li className="list-group-item">
                            <h5>Senior High</h5>
                            <p>Cabuyao National High School</p>
                        </li>
                        <li className="list-group-item">
                            <h5>Junior High</h5>
                            <p>Cabuyao National High School – 2015–2019</p>
                        </li>
                        <li className="list-group-item">
                            <h5>Elementary</h5>
                            <p>Cabuyao Elementary School – 2009–2015</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Education;