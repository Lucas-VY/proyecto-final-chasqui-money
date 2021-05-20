import "../css/NotFound.css";

const NotFound = () => {
  return (
    <>
      <div className="container">
        <div className="jumbotron bg-transparent notFound">
          <h1 className="notFound"> 404</h1>
          <h1 className="notFound"> Not found, sorry.</h1>
          <p className="notFound"> Please check the route you're using.</p>
          <h1 className="notFound">
            <i className="fas fa-user-astronaut text-warning"></i>
          </h1>
        </div>
      </div>
    </>
  );
};

export default NotFound;
