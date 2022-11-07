import StoreComponent from './StoreComponent';
import ProductComponent from './ProductComponent';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<StoreComponent/>} />
          {/* <Route path = "/product/:id" element = {<ProductComponent/>} /> */}
          <Route path="/product" element={<ProductComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
