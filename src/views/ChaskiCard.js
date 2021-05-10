import Sidebar from "../components/Sidebar";

const ChaskiCard = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 col-xl-2 px-0">
            <Sidebar />
          </div>

          <div className="col-12 col-md-9 mt-5 px-5">{/* BODY AQUI */}</div>
        </div>
      </div>
    </>
  );
};

export default ChaskiCard;
