import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../store/cartSlice";

import "./Cart.css";

// Cart component displays all items in the cartContents, along with the cart price subtotal

function Cart() {
  const dispatch = useDispatch();
  const contents = useSelector((state) => state.cart.cartContents);
  const subTotal = useSelector((state) => state.cart.subTotal);
  return (
    <ul className="card">
      {contents.map((item) => (
        <article key={item.key}>
          <header>
            <h3>
              {item.productName} (${item.price}/item) x{item.amount}
            </h3>
          </header>
          <div>item total: ${item.totalPrice}</div>
        </article>
      ))}
      <div>cart subtotal: ${subTotal}</div>
      <footer className="footer">
        <button
          className="buttonClass"
          onClick={() => dispatch(cartActions.clearCart())}
        >
          Clear Cart
        </button>
      </footer>
    </ul>
  );
}

export default Cart;
