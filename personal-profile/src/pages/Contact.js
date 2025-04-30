// Contact.jsx
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would normally handle form submission
        console.log('Form submitted:', formData);
        alert('Thank you for your message! I\'ll get back to you soon.');
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    };
    
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <div className="card shadow-sm border-0">
                        <div className="card-header bg-primary text-white p-4">
                            <h1 className="text-center m-0 fw-bold">Get In Touch</h1>
                        </div>
                        <div className="card-body p-4 p-lg-5">
                            <div className="row">
                                <div className="col-lg-5 mb-4 mb-lg-0">
                                    <h4 className="mb-4">Contact Information</h4>
                                    <div className="d-flex align-items-start mb-4">
                                        <div className="bg-primary text-white rounded-circle p-2 me-3">
                                            <i className="bi bi-envelope"></i>
                                        </div>
                                        <div>
                                            <h5 className="mb-1">Email</h5>
                                            <p className="mb-0">
                                                <a href="mailto:delgadocharles1614@example.com" className="text-decoration-none">
                                                    delgadocharles1614@example.com
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                    
                                    <div className="d-flex align-items-start mb-4">
                                        <div className="bg-primary text-white rounded-circle p-2 me-3">
                                            <i className="bi bi-github"></i>
                                        </div>
                                        <div>
                                            <h5 className="mb-1">GitHub</h5>
                                            <p className="mb-0">
                                                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                                                    github.com/yourusername
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                    
                                    <div className="d-flex align-items-start mb-4">
                                        <div className="bg-primary text-white rounded-circle p-2 me-3">
                                            <i className="bi bi-linkedin"></i>
                                        </div>
                                        <div>
                                            <h5 className="mb-1">LinkedIn</h5>
                                            <p className="mb-0">
                                                <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                                                    linkedin.com/in/yourprofile
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                    
                                    <div className="d-flex align-items-start">
                                        <div className="bg-primary text-white rounded-circle p-2 me-3">
                                            <i className="bi bi-geo-alt"></i>
                                        </div>
                                        <div>
                                            <h5 className="mb-1">Location</h5>
                                            <p className="mb-0">Cabuyao, Laguna, Philippines</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-lg-7">
                                    <h4 className="mb-4">Send Me a Message</h4>
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-3">
                                            <label htmlFor="name" className="form-label">Your Name</label>
                                            <input 
                                                type="text" 
                                                className="form-control" 
                                                id="name" 
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required 
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="email" className="form-label">Email Address</label>
                                            <input 
                                                type="email" 
                                                className="form-control" 
                                                id="email" 
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required 
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="subject" className="form-label">Subject</label>
                                            <input 
                                                type="text" 
                                                className="form-control" 
                                                id="subject" 
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                required 
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="message" className="form-label">Message</label>
                                            <textarea 
                                                className="form-control" 
                                                id="message" 
                                                name="message"
                                                rows="5"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                            ></textarea>
                                        </div>
                                        <button type="submit" className="btn btn-primary px-4 py-2">
                                            <i className="bi bi-send me-2"></i>
                                            Send Message
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;