import './footer.css';
const Footer = () => {
  return (
    <div className="container-fluid footer pb-0 mb-0 fixed-bottom justify-content-center text-light ">
<footer className="bg-dark text-center text-white">
  {/* Grid container */}
  <div className="container p-4 pb-0">
    {/* Section: Social media */}
    <section className="mb-4">
      {/* Facebook */}
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-facebook-f" /></a>
      {/* Twitter */}
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-twitter" /></a>
      {/* Google */}
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-google" /></a>
      {/* Instagram */}
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-instagram" /></a>
      {/* Linkedin */}
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-linkedin-in" /></a>
      {/* Github */}
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-github" /></a>
    </section>
    {/* Section: Social media */}
  </div>

  <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
    © 2021 Copyright:
    <a className="text-white" href="/">Chaski-Team</a>
  </div>
</footer>
</div>
  
  );
};

export default Footer;

