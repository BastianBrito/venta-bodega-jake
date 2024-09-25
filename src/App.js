import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import NavBar from "./componentes/NavBar";
import Sidebar from "./componentes/Sidebar";
import Home from "../src/pages/Home";
import Sales from "../src/pages/Sales";
import Clients from "../src/pages/Clients";
function App() {
  return (
    <Router>
      <div>
        <NavBar />

        <div className="flex">
          <Sidebar />
          <div className="content">
            <Routes>
              <Route path="/" exact={true} Component={Home} />
              <Route path="/Sales" exact={true} Component={Sales} />
              <Route path="/Clients" exact={true} Component={Clients} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
