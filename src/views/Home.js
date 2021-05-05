import Conversor from "../components/Conversor";

const Home = () => {
  return (
    <>
    <div className="container">
  <div className="row">
    <div className="col-6">
      <h1>Calcula y cotiza tu tasa de cambio</h1>
      <p>Mauris egestas tellus non ex condimentum, ac ullamcorper sapien dictum. 
        Nam consequat neque quis sapien viverra convallis. In non tempus lorem. </p>
      </div>
    <div className="col-6">
      <div className="col-12">
      <Conversor />
        <div className="screen" />
      </div>
    </div>
  </div>
</div>
      
    </>
  );
};

export default Home;
