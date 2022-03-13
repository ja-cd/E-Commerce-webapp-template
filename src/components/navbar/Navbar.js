import Cart from './Cart';

import './Navbar.css';

import { cartActions } from '../store/cartSlice';
import { useSelector, useDispatch } from 'react-redux';

// Navbar that contains cart component

function Navbar() {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart.showCart)
    const quantity = useSelector(state => state.cart.totalQuantity)

    return (
        <>
            <nav className="NavbarItems">
                <h1 className="navbar-text">E-Commerce Site</h1>
                <div className="menu-icon">

                </div>
                <form className="nav-menu">
                    <input type="text" className="css-input" />
                </form>
                <h1 className="navbar-cart" onClick={() => dispatch(cartActions.toggleCart())}> Cart {quantity}</h1>
            </nav>
            {cart && <Cart />}
        </>
    );

}
export default Navbar;