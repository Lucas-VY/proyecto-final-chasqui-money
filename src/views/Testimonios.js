import "../css/Testimonios.css";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Testimonios = () => {
  return (
    <>
    <Navbar />

      <div className="container ">
        <div id="demo" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner ">
            <div className="carousel-item active">
              <div className="carousel-caption bg-transparent" id="carousel-color">
                <p id="testimonios">
                  If Shai Reznik's TDD videos don't convince you to add
                  automated testing your code, I don't know what will.This was
                  the very best explanation of frameworks for brginners that
                  I've ever seen.
                  {" "}
                </p>{" "}
                <img src="https://i.imgur.com/lE89Aey.jpg" alt="" />
                <div id="image-caption">Nick Doe</div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-caption" id="carousel-color">
                <p id="testimonios">
                  If Shai Reznik's TDD videos don't convince you to add
                  automated testing your code, I don't know what will.This was
                  the very best explanation of frameworks for brginners that
                  I've ever seen.
                </p>{" "}
                <img
                  src="https://i.imgur.com/QptVdsp.jpg"
                  //className="img-fluid"
                  alt=""
                />
                <div id="image-caption">Cromption Greves</div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-caption" id="carousel-color">
                <p id="testimonios">
                  If Shai Reznik's TDD videos don't convince you to add
                  automated testing your code, I don't know what will.This was
                  the very best explanation of frameworks for brginners that
                  I've ever seen.
                </p>{" "}
                <img
                  //className="img-fluid"
                  src="https://i.imgur.com/jQWThIn.jpg"
                  alt=""
                />
                <div id="image-caption">Harry Mon</div>
              </div>
            </div>
          </div>{" "}
          <a className="carousel-control-prev" href="#demo" data-slide="prev">
            {" "}
            <i className="fas fa-arrow-left" />{" "}
          </a>{" "}
          <a className="carousel-control-next" href="#demo" data-slide="next">
            {" "}
            <i className="fas fa-arrow-right" />{" "}
          </a>
        </div>
      </div>

    <Footer />
    </>
  );
};

export default Testimonios;
