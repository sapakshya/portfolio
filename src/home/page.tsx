import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export const Home = () => {
  return (
    <>
      <Header />

      {/* Hero Section - Like Kelly */}
      <section className="d-flex align-items-center" style={{ minHeight: "90vh" }}>
        <div className="container">
          <div className="row align-items-center">

            {/* Text Section */}
            <div className="col-lg-6">
              <h1 className="fw-bold mb-3">
                Hi, I'm Sapakshya 👋
              </h1>
              <h4 className="text-muted mb-4">
                IT Student | Future Cloud & Cybersecurity Engineer
              </h4>

              <p className="mb-4">
                I am a passionate IT student from Pokhara, Nepal, currently 
                pursuing my bachelor's degree in Information Technology. 
                I’m deeply interested in cloud engineering, cybersecurity, 
                and building modern web applications.
              </p>

              <p className="mb-4">
                My goal is to build strong technical skills, gain international 
                exposure, and work towards permanent residency in Australia 
                through a successful tech career.
              </p>

              <a href="/contact" className="btn btn-primary px-4 py-2">
                Contact Me
              </a>
            </div>

            {/* Image Section */}
            <div className="col-lg-6 text-center">
              <img
                src="/pic.jpeg"
                alt="Sapakshya"
                className="img-fluid rounded shadow"
                style={{ maxWidth: "400px" }}
              />
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};