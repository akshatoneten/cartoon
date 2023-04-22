import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./componenets/Home";
import Mainheader from "./componenets/Mainheader";
import Chottabheem from "./componenets/Chottabheem";
import Tomjerry from "./componenets/Tomjerry";
import Doremon from "./componenets/Doremon";
import Ninjahatori from "./componenets/Ninjahatori";
import Shinchan from "./componenets/Shinchan";
import Pikachu from "./componenets/Pikachu";
import Oggycock from "./componenets/Oggycock";
import Notfound from "./componenets/Notfound";


function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Mainheader />}>
          <Route index element={<Home />}></Route>
          <Route path="/tomjerry" element={<Tomjerry/>}></Route>
          <Route path="/doremon" element={<Doremon/>}></Route>
          <Route path="/chottabheem" element={<Chottabheem/>}></Route>
          <Route path="/ninjahatori" element={<Ninjahatori/>}></Route>
          <Route path="/shinchan" element={<Shinchan/>}></Route>
          <Route path="/pikachu" element={<Pikachu/>}></Route>
          <Route path="/oggycock" element={<Oggycock/>}></Route>
          <Route path="*" element={<Notfound/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
