import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import NotFound from "./views/Notfound";
import injectContext from "./store/appContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="container-fluid">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home}></Route>
            
            <Route component={NotFound}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default injectContext(App);
