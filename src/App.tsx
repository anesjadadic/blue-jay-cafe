// App.js
import Home from "./Home";
import Shop from './Shop';
import Menu from './Menu';
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <ShoppingCartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </ShoppingCartProvider>
  );
}

export default App;
