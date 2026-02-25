import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import "./about.css"; 

export function About() {
  return (
    <>
      <Header />
      <main className="about-page">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="container">
            <h1>About</h1>
            <p className="section-subtitle">
              Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
            </p>
          </div>
        </section>

        {/* Profile Section */}
        <section className="profile-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <img 
                  src="https://via.placeholder.com/400x400" 
                  alt="Profile" 
                  className="profile-image img-fluid rounded-circle"
                />
              </div>
              <div className="col-lg-8">
                <h2>UI/UX Designer & Web Developer.</h2>
                <p className="intro-text">
                  Hello, I’m Sapakshya, a passionate UI/UX designer and web developer.
                </p>
                
                <div className="row">
                  <div className="col-md-6">
                    <ul className="info-list">
                      <li><strong>Birthday:</strong> 13 May 2005</li>
                      <li><strong>Website:</strong> www.example.com</li>
                      <li><strong>Phone:</strong> +977 9819169184</li>
                      <li><strong>City:</strong> Pokhara, Nepal</li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="info-list">
                      <li><strong>Age:</strong> 20</li>
                      <li><strong>Degree:</strong> Bachelor Running</li>
                      <li><strong>Email:</strong> sapakshya@example.com</li>
                      <li><strong>Freelance:</strong> Available</li>
                    </ul>
                  </div>
                </div>
                
                <p className="description">
                 An IT student and passionate builder exploring the world of web development and cloud computing.
                  I enjoy transforming ideas into clean, functional digital experiences that feel simple yet meaningful.
                  For me, tech isn’t just about writing code - it’s about solving real problems, creating impact, and constantly evolving.
                 I’m currently sharpening my skills through hands-on projects while building a strong foundation for a future in cloud engineering.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="skills-section">
          <div className="container">
            <h2>Skills</h2>
            <p className="section-subtitle">
              These are the skills I have acquired over the years of experience in the web development industry.
            </p>

            <div className="skills-content">
              <div className="skill-item">
                <div className="skill-info">
                  <span>HTML</span>
                  <span>100%</span>
                </div>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "100%" }}></div>
                </div>
              </div>

              <div className="skill-item">
                <div className="skill-info">
                  <span>CSS</span>
                  <span>90%</span>
                </div>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "90%" }}></div>
                </div>
              </div>

              <div className="skill-item">
                <div className="skill-info">
                  <span>JavaScript</span>
                  <span>75%</span>
                </div>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "75%" }}></div>
                </div>
              </div>

              <div className="skill-item">
                <div className="skill-info">
                  <span>Photoshop</span>
                  <span>80%</span>
                </div>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "80%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="testimonials-section">
          <div className="container">
            <h2>Testimonials</h2>
            <p className="section-subtitle">
              These are the testimonials from my clients and colleagues who have worked with me.
            </p>

            <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="testimonial-item">
                    <img src="https://via.placeholder.com/100x100" className="testimonial-img rounded-circle" alt="Saul Goodman" />
                    <h3>Saul Goodman</h3>
                    <h4>Ceo & Founder</h4>
                    <p>
                      <i className="quote-icon-left">"</i>
                      Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. 
                      Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                      <i className="quote-icon-right">"</i>
                    </p>
                  </div>
                </div>

                <div className="carousel-item">
                  <div className="testimonial-item">
                    <img src="https://via.placeholder.com/100x100" className="testimonial-img rounded-circle" alt="Sara Wilsson" />
                    <h3>Sara Wilsson</h3>
                    <h4>Designer</h4>
                    <p>
                      <i className="quote-icon-left">"</i>
                      Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum 
                      eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                      <i className="quote-icon-right">"</i>
                    </p>
                  </div>
                </div>

                {/* Add more carousel items as needed */}
              </div>

              <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}