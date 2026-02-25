import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export const Contact = () => {
  return (
    <>
      <Header />

      {/* Contact Section */}
      <section className="contact-section container py-5">
        <h2 className="text-center mb-4">Contact</h2>

        {/* Contact Info */}
        <div className="row text-center mb-5">
          <div className="col-md-4">
            <h5>Address</h5>
            <p>A108 Adam Street, New York, NY 535022</p>
          </div>
          <div className="col-md-4">
            <h5>Call Us</h5>
            <p>+1 5589 55488 55</p>
          </div>
          <div className="col-md-4">
            <h5>Email Us</h5>
            <p>info@example.com</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <form>
              <div className="mb-3">
                <label htmlFor="nameInput" className="form-label">
                  Your Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nameInput"
                  placeholder="Your Name"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="emailInput" className="form-label">
                  Your Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="emailInput"
                  placeholder="Your Email"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="subjectInput" className="form-label">
                  Subject
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="subjectInput"
                  placeholder="Subject"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="messageInput" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="messageInput"
                  rows={5}
                  placeholder="Message"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};