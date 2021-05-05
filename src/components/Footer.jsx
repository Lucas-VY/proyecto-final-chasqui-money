import "./footer.css";
const Footer = () => {
  return (
    <div className="container-fluid footer pb-0 mb-0 fixed-bottom justify-content-center text-light ">
      <footer>
        <div className="row my-5 justify-content-center py-5">
          <div className="col-11">
            <div className="row ">
              <div className="col-xl-4 col-md-2 col-sm-2 col-12 my-auto mx-auto">
                <h3 className="text-muted mb-md-0 mb-5 bold-text">
                  Chaski Money
                </h3>
                <div className="mb-3 mb-lg-4 bold-text my-3">
                  <p className="mb-3 mb-lg-4 bold-text text-justify">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </p>
                </div>
              </div>
              <div className="col-xl-2 col-md-4 col-sm-4 col-12">
                <h6 className="mb-3 mb-lg-4 bold-text ">
                  <b>MENU</b>
                </h6>
                <ul className="list-unstyled">
                  <li>Inicio</li>
                  <li>Quienes Somos?</li>
                  <li>Blog</li>
                  <li>Contactanos</li>
                </ul>
              </div>
              <div className="col-xl-2 col-md-4 col-sm-4 col-12">
                <h6 className="mb-3 mb-lg-4 text-muted bold-text mt-sm-0 mt-5">
                  <b>DIRECCION</b>
                </h6>
                <p className="mb-1">666, ALAMEDA</p>
                <p>SANTIAGO, CHILE</p>
              </div>
            </div>
            <div className="row ">
              <div className="col-xl-8 col-md-4 col-sm-4 col-auto my-md-0 mt-5 order-sm-1 order-3 align-self-end">
                <p className="social text-muted mb-0 pb-0 bold-text">
                  {" "}
                  <span className="mx-2">
                    <i className="fa fa-facebook" aria-hidden="true" />
                  </span>
                  <span className="mx-2">
                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                  </span>
                  <span className="mx-2">
                    <i className="fa fa-twitter" aria-hidden="true" />
                  </span>
                  <span className="mx-2">
                    <i className="fa fa-instagram" aria-hidden="true" />
                  </span>
                </p>
                <small className="rights">
                  <span>®</span>
                  Chaski All Rights Reserved.
                </small>
              </div>
              <div className="col-xl-2 col-md-4 col-sm-4 col-auto order-1 align-self-end ">
                <h6 className="mt-55 mt-2 text-muted bold-text">
                  <b>MAIL OFICINA</b>
                </h6>
                <small>
                  <span>
                    <i className="fa fa-envelope" aria-hidden="true" />
                  </span>
                  Chaski@gmail.com
                </small>
              </div>
              <div className="col-xl-2 col-md-4 col-sm-4 col-auto order-2 align-self-end mt-3 ">
                <h6 className="text-muted bold-text">
                  <b>MAIL DE CONTACTO</b>
                </h6>
                <small>
                  <span>
                    <i className="fa fa-envelope" aria-hidden="true" />
                  </span>
                  TuPapi@gmail.com
                </small>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

/* <div className="container-fluid footer pb-0 mb-0 justify-content-center text-light ">
<footer>
  <div className="row my-5 justify-content-center py-5">
    <div className="col-11">
      <div className="row ">
        <div className="col-xl-8 col-md-2 col-sm-2 col-12 my-auto mx-auto a">
          <h3 className="text-muted mb-md-0 mb-5 bold-text">Chaski Money</h3>
          <div className="mb-3 mb-lg-4 bold-text">
          <p className="mb-3 mb-lg-4 bold-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
            remaining essentially unchanged.</p>
          </div>
        </div>
        <div className="col-xl-2 col-md-4 col-sm-4 col-12">
          <h6 className="mb-3 mb-lg-4 bold-text "><b>MENU</b></h6>
          <ul className="list-unstyled">
            <li>Inicio</li>
            <li>Quienes Somos?</li>
            <li>Blog</li>
            <li>Contactanos</li>
          </ul>
        </div>
        <div className="col-xl-2 col-md-4 col-sm-4 col-12">
          <h6 className="mb-3 mb-lg-4 text-muted bold-text mt-sm-0 mt-5"><b>DIRECCION</b></h6>
          <p className="mb-1">666, ALAMEDA</p>
          <p>SANTIAGO, CHILE</p>
        </div>
      </div>
      <div className="row ">
        <div className="col-xl-8 col-md-4 col-sm-4 col-auto my-md-0 mt-5 order-sm-1 order-3 align-self-end">
          <p className="social text-muted mb-0 pb-0 bold-text"> <span className="mx-2"><i className="fa fa-facebook" aria-hidden="true" /></span> 
            <span className="mx-2">
              <i className="fa fa-linkedin-square" aria-hidden="true" />
            </span> 
            <span className="mx-2">
              <i className="fa fa-twitter" aria-hidden="true" />
            </span> 
            <span className="mx-2">
              <i className="fa fa-instagram" aria-hidden="true" />
            </span> 
          </p>
          <small className="rights">
            <span>
              ®
            </span> 
              Chaski All Rights Reserved.
          </small>
        </div>
        <div className="col-xl-2 col-md-4 col-sm-4 col-auto order-1 align-self-end ">
          <h6 className="mt-55 mt-2 text-muted bold-text"><b>MAIL OFICINA</b></h6>
          <small> 
            <span>
              <i className="fa fa-envelope" aria-hidden="true" />
            </span> 
            Chaski@gmail.com
          </small>
        </div>
        <div className="col-xl-2 col-md-4 col-sm-4 col-auto order-2 align-self-end mt-3 ">
          <h6 className="text-muted bold-text"><b>MAIL DE CONTACTO</b></h6>
          <small>
            <span>
            <i className="fa fa-envelope" aria-hidden="true" />
            </span>
             TuPapi@gmail.com
          </small>
        </div>
      </div>
    </div>
  </div>
</footer>
</div> */
