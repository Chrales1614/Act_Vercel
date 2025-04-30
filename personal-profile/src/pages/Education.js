// Education.jsx
import 'bootstrap/dist/css/bootstrap.min.css';

function Education() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-10 mx-auto">
                    <h1 className="text-center mb-5 fw-bold">Education Journey</h1>
                    
                    <div className="timeline position-relative">
                        <div className="timeline-item pb-5 position-relative ms-5">
                            <div className="timeline-marker position-absolute bg-primary rounded-circle d-flex align-items-center justify-content-center text-white" 
                                style={{ width: "50px", height: "50px", left: "-60px", top: "0" }}>
                                <i className="bi bi-mortarboard-fill"></i>
                            </div>
                            <div className="card shadow-sm border-0">
                                <div className="card-body p-4">
                                    <div className="d-flex justify-content-between mb-2">
                                        <h4 className="text-primary">University of Cabuyao</h4>
                                        <span className="badge bg-primary">2021–2025</span>
                                    </div>
                                    <h5>Bachelor of Science in Information Technology</h5>
                                    <p className="mb-0">
                                        Focused on web development and database management. Participated in various coding competitions
                                        and tech events. Maintained a strong academic record throughout the program.
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="timeline-item pb-5 position-relative ms-5">
                            <div className="timeline-marker position-absolute bg-primary rounded-circle d-flex align-items-center justify-content-center text-white" 
                                style={{ width: "50px", height: "50px", left: "-60px", top: "0" }}>
                                <i className="bi bi-book"></i>
                            </div>
                            <div className="card shadow-sm border-0">
                                <div className="card-body p-4">
                                    <div className="d-flex justify-content-between mb-2">
                                        <h4 className="text-primary">Cabuyao National High School</h4>
                                        <span className="badge bg-primary">2019–2021</span>
                                    </div>
                                    <h5>Senior High School</h5>
                                    <p className="mb-0">
                                        ICT Strand focusing on computer programming and multimedia arts.
                                        Member of the Computer Club and participated in regional programming competitions.
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="timeline-item pb-5 position-relative ms-5">
                            <div className="timeline-marker position-absolute bg-primary rounded-circle d-flex align-items-center justify-content-center text-white" 
                                style={{ width: "50px", height: "50px", left: "-60px", top: "0" }}>
                                <i className="bi bi-journal-text"></i>
                            </div>
                            <div className="card shadow-sm border-0">
                                <div className="card-body p-4">
                                    <div className="d-flex justify-content-between mb-2">
                                        <h4 className="text-primary">Cabuyao National High School</h4>
                                        <span className="badge bg-primary">2015–2019</span>
                                    </div>
                                    <h5>Junior High School</h5>
                                    <p className="mb-0">
                                        Discovered my passion for technology and computer science.
                                        Active participant in mathematics and science clubs.
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="timeline-item position-relative ms-5">
                            <div className="timeline-marker position-absolute bg-primary rounded-circle d-flex align-items-center justify-content-center text-white" 
                                style={{ width: "50px", height: "50px", left: "-60px", top: "0" }}>
                                <i className="bi bi-pencil"></i>
                            </div>
                            <div className="card shadow-sm border-0">
                                <div className="card-body p-4">
                                    <div className="d-flex justify-content-between mb-2">
                                        <h4 className="text-primary">Cabuyao Elementary School</h4>
                                        <span className="badge bg-primary">2009–2015</span>
                                    </div>
                                    <h5>Elementary Education</h5>
                                    <p className="mb-0">
                                        Built a strong foundation in core subjects and developed an early interest in mathematics and science.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;
