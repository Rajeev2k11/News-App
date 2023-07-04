import { BrowserRouter as Router,  Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/nabvar/Navbar";


function App() {
 
  return (
    <>
      <Router>
        <Navbar />
      
        < Routes>
          <Route exact path="/" element={<Home category="general"/>}/>
          <Route exact path="/business" element={<Home category="business"/>}/>
          <Route exact path="/entertainment" element={<Home category="entertainment"/>}/>
          <Route exact path="/health" element={<Home category="health"/>}/>
          <Route exact path="/science" element={<Home category="science"/>}/>
            
         
        </ Routes>
      </Router>
    </>
  );
}

export default App;
