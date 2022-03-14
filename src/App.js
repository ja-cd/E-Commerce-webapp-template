import { Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/navbar/Navbar";

import Featured from "./pages/Featured";
import Search from "./pages/Search";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <>
      <Navbar />
      <Route path="/" exact>
        <Featured />
      </Route>

      <Route path="/search">
        <Search />
      </Route>

      <Route path="/cart">
        <CartPage />
      </Route>
    </>
  );
}

export default App;
