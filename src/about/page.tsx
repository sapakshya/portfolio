import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import "./about.css"; // We'll create this next

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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                
                <div className="row">
                  <div className="col-md-6">
                    <ul className="info-list">
                      <li><strong>Birthday:</strong> 1 May 1995</li>
                      <li><strong>Website:</strong> www.example.com</li>
                      <li><strong>Phone:</strong> +123 456 7890</li>
                      <li><strong>City:</strong> New York, USA</li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="info-list">
                      <li><strong>Age:</strong> 30</li>
                      <li><strong>Degree:</strong> Master</li>
                      <li><strong>Email:</strong> email@example.com</li>
                      <li><strong>Freelance:</strong> Available</li>
                    </ul>
                  </div>
                </div>
                
                <p className="description">
                  Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. 
                  Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. 
                  Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. 
                  Sed et consectetur qui quia repellendus itaque neque.
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
              Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
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
                  <span>PHP</span>
                  <span>80%</span>
                </div>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "80%" }}></div>
                </div>
              </div>

              <div className="skill-item">
                <div className="skill-info">
                  <span>WordPress/CMS</span>
                  <span>90%</span>
                </div>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "90%" }}></div>
                </div>
              </div>

              <div className="skill-item">
                <div className="skill-info">
                  <span>Photoshop</span>
                  <span>55%</span>
                </div>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "55%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Facts Section */}
        <section className="facts-section">
          <div className="container">
            <h2>Facts</h2>
            <p className="section-subtitle">
              Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
            </p>

            <div className="row facts-grid">
              <div className="col-lg-3 col-md-6">
                <div className="fact-item">
                  <div className="fact-number">232</div>
                  <div className="fact-text">Clients</div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="fact-item">
                  <div className="fact-number">521</div>
                  <div className="fact-text">Projects</div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="fact-item">
                  <div className="fact-number">1453</div>
                  <div className="fact-text">Hours Of Support</div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="fact-item">
                  <div className="fact-number">32</div>
                  <div className="fact-text">Workers</div>
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
              Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
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