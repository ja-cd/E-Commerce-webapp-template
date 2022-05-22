import classes from "./Navbar.module.css";

import { NavLink } from "react-router-dom";

import { useSelector } from "react-redux";
import SearchBar from "./SearchBar";

function Navbar() {
  const quantity = useSelector((state) => state.cart.totalQuantity);
  const results = useSelector((state) => state.search.results);
  return (
    <>
      <nav className={classes.navbar}>
        <NavLink className={classes.text} to="/">
          E-Commerce Site
        </NavLink>

        <div>
          <SearchBar />
          <div className={classes.apiresults}>
            {results.map((item) => (
              <>
                <NavLink to={"/search/" + item}>{item}</NavLink>
                <div />
              </>
            ))}
          </div>
        </div>

        <NavLink className={classes.cart} to="/cart">
          Cart ({quantity})
        </NavLink>
      </nav>
    </>
  );
}
export default Navbar;
