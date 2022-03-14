import classes from './Navbar.module.css'

import { NavLink } from "react-router-dom";

import { useSelector } from "react-redux";

function Navbar() {
  const quantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <>
      <nav className={classes.navbar}>
        <NavLink className={classes.text} to="/">E-Commerce Site</NavLink>

        <form className={classes.format}>
          <input type="text" className={classes.form} />
        </form>

        <NavLink className={classes.cart} to="/cart">Cart ({quantity})</NavLink>
      </nav>
    </>
  );
}
export default Navbar;
