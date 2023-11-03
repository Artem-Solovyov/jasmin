import { Route, Routes } from "react-router-dom";
import "./App.css";
import Orders from "./pages/Orders";
import EditOrder from "./pages/EditOrder";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="hero">
        <div className="navigation">Navigation</div>
        <div className="dashboard">
          <Routes>
            <Route path={"/"} element={<Orders />} />
            <Route path={"/edit"} element={<EditOrder />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
