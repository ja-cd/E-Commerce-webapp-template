import "./Products.css";

import { NavLink } from "react-router-dom";

import { useDispatch } from "react-redux";
import { cartActions } from "../store/cartSlice";

function Products() {
  const dispatch = useDispatch();
  var dummyProducts = [
    {
      key: 1,
      productName: "Book",
      description: "Leather bound, soft paper",
      price: 10,
    },
    {
      key: 2,
      productName: "Pokemon",
      description: "Catch em all",
      price: 29.99,
    },
  ];

  return (
    <ul className="item">
      {dummyProducts.map((item) => (
        <article key={item.key} className="card">
          <header>
            <NavLink to={"/search/" + item["productName"]}>
              {item.productName}
            </NavLink>
          </header>
          <p>{item.description}</p>
          <div className="price">${item.price}</div>

          <footer className="footer">
            <button
              className="buttonClass"
              onClick={() => dispatch(cartActions.addToCart(item))}
            >
              Add to cart
            </button>
          </footer>
        </article>
      ))}
    </ul>
  );
}

export default Products;
