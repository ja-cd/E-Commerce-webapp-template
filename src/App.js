import { Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/navbar/Navbar";

import Landing from "./pages/LandingPage";
import SearchPage from "./pages/SearchPage";
import CartPage from "./pages/CartPage";
import CollectionsPage from "./pages/CollectionsPage";

function App() {
  return (
    <>
      <Navbar />
      <Route path="/" exact>
        <Landing />
      </Route>

      <Route path="/search/:searchTerm">
        <SearchPage />
      </Route>

      <Route path="/collections">
        <CollectionsPage />
      </Route>

      <Route path="/cart">
        <CartPage />
      </Route>
    </>
  );
}

export default App;
