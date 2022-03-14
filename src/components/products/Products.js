import "./Products.css";

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
      productName: "Phone",
      description: "Suspiciously low cost phone",
      price: 399,
    },
    {
      key: 3,
      productName: "Desk",
      description: "Just as good as the real oak",
      price: 99,
    },
    {
      key: 4,
      productName: "Weird thing",
      description: "Unknown materials used",
      price: 1025,
    },
  ];

  return (
    <ul className="item">
      {dummyProducts.map((item) => (
        <article key={item.key} className="card">
          <header>
            <h3>{item.productName}</h3>
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
