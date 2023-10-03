import Home from "./Home"
import Shop from './Shop';
import Menu from './Menu';
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

import {
  BrowserRouter,
  Routes, Route,
} from "react-router-dom";

function App() {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App;