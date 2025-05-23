import Navbar from './Navbar';

const Hero = () => {
  return (
    <section id="nibras-welcome" className="section-landing min-h-screen gap-4">
      <Navbar />
      <div className="section-landing-container h-full">
        <div className="section-landing-grid-1">
          <div className="section-landing-grid-text-1">
            <h1 className="section-landing-header-1">
              Build the Future with modern
            </h1>
            <h1 className="section-landing-header-2">
              Web, Mobile & AI Solutions
            </h1>
            <p className="section-landing-paragraph">
              We craft powerful, scalable, and intelligent digital products that
              turn your ideas into real-world impact. From startup MVPs to
              enterprise platforms—launch faster, smarter, and better.
            </p>
          </div>
          <div className="col-span-1">
            <img src="/images/hero-image.png" alt="Hero Logo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
