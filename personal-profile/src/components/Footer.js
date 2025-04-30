// Footer.jsx
function Footer() {
    return (
        <footer className="bg-dark text-white text-center py-4 mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <h5>Connect With Me</h5>
                        <div className="d-flex justify-content-center gap-3 mb-3">
                            <a href="https://github.com/yourusername" className="text-white fs-4">
                                <i className="bi bi-github"></i>
                            </a>
                            <a href="https://linkedin.com/in/yourprofile" className="text-white fs-4">
                                <i className="bi bi-linkedin"></i>
                            </a>
                            <a href="mailto:delgadocharles1614@example.com" className="text-white fs-4">
                                <i className="bi bi-envelope-fill"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <hr className="my-3" />
                <p className="mb-0">© 2025 Your Name. All rights reserved.</p>
            </div>
        </footer>
    );
}
export default Footer;