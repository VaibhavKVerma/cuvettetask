import "./css/App.css";
import "./css/App1.css";
import "./css/App2.css";
import "./css/App3.css";
import "./css/App4.css";
import "./css/App5.css";
import "./css/Main.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Overlay from "./components/Overlay";
import { useState } from "react";
import { Context } from "./Context.js";

function App() {
  const [data, setData] = useState({
    rank: "12890",
    percentile: "37",
    score: "7",
    overlay: 0,
  });

  return (
    <Context.Provider value={[data, setData]}>
      <Header />
      <div className="MessageChannel_container__h5Org ">
        <Sidebar />
        <Main />
      </div>
      <Overlay />
    </Context.Provider>
  );
}

export default App;
