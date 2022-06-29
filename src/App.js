import { Route, Switch } from "react-router-dom";
import "./App.css";

import Navbar from "./components/navbar/Navbar";

import Landing from "./pages/LandingPage";
import SearchPage from "./pages/SearchPage";
import CartPage from "./pages/CartPage";
import CollectionsPage from "./pages/CollectionsPage";
import CollDetailsPage from "./pages/CollDetailsPage";
import { Redirect } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Route path="/" exact>
        <Landing />
      </Route>

      <Route path="/search/" exact>
        <Redirect to="/" />
      </Route>

      <Route path="/search/:searchTerm">
        <SearchPage />
      </Route>

      <Switch>
        <Route path="/collections" exact>
          <CollectionsPage />
        </Route>

        <Route path="/collections/:collection">
          <CollDetailsPage />
        </Route>
      </Switch>

      <Route path="/cart">
        <CartPage />
      </Route>
    </>
  );
}

export default App;
