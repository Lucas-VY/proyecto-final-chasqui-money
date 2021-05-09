import '../css/UserView.css'
import Sidebar from '../components/Sidebar';

const UserView = () => {
    return(
        <>
    
 <Sidebar/>


      <main role="main" className="col-md-9 ml-sm-auto col-lg-10 my-3">
        <div className="card-list">
          <div className="row">
          <div className="col-md-3">
            <div className="card-counter primary">
              <i className="fas fa-coins" />
              <div className="count-numbers value">200</div>
                <div className="count-name stat"><b></b>Total transferencias</div>
            </div>
          </div>

            
            <div className="col-12 col-md-6 col-lg-4 col-xl-3 mb-4">
            <div className="card-counter danger">
              <i className="fas fa-handshake" />
              <span className="count-numbers">+1M</span>
              <span className="count-name">Transferencias</span>
            </div>
            </div>


            <div className="col-12 col-md-6 col-lg-4 col-xl-3 mb-4">
            <div className="card-counter success">
              <i className="fa fa-database" />
              <span className="count-numbers">+400K</span>
              <span className="count-name">Data</span>
            </div>
            </div>

            
        <div className="col-12 col-md-6 col-lg-4 col-xl-3 mb-4">
            <div className="card-counter info">
              <i className="fa fa-users" />
              <span className="count-numbers">+500K</span>
              <span className="count-name">Usuarios</span>
            </div>
            </div>
          </div>
        </div>


            {/* <div className="col-12 col-md-6 col-lg-4 col-xl-3 mb-4">
              <div className="card red">
                <div className="title">new customers</div>
                <i className="zmdi zmdi-download" />
                <div className="value">3</div>
                <div className="stat"><b>13</b>% decrease</div>
              </div>
            </div>
          </div>
        </div> */}

      </main>
      
</>

    )   
};

export default UserView;
