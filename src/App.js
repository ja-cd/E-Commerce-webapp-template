import { Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/navbar/Navbar";

import Featured from "./pages/FeaturedPage";
import SearchPage from "./pages/SearchPage";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <>
      <Navbar />
      <Route path="/" exact>
        <Featured />
      </Route>

      <Route path="/search/:searchTerm">
        <SearchPage />
      </Route>

      <Route path="/cart">
        <CartPage />
      </Route>
    </>
  );
}

export default App;
