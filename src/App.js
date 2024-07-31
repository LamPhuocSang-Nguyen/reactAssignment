import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home/Home";
import AddChemicalpage from "./pages/AddChemicalpage/AddChemicalpage";

function App() {
  return (
    <div>
      <Router>

        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="/AddChemicalpage" element={<AddChemicalpage />}></Route>
          {/* <Route path="/detail/:id" element={<ProductDetail />}></Route> */}
          {/* <Route path="/ShowCart" element={<ShowCart />}></Route>
<Route path="/ShowCats" element={<ShowCats />}></Route> */}
          {/* <Route path="/*" element={<NotFound />}></Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
