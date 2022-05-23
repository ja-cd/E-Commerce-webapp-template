import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchFull } from "../store/SearchActions";

function Search() {
  const dispatch = useDispatch();
  const params = useParams();
  const product = useSelector((state) => state.search.productSearchResults);
  console.log("CURRENTLY IN PRODUCT:" + product);

  console.log("API CALL DISPATCHING:" + product);
  dispatch(fetchFull(params.searchTerm));
  console.log("AFTER CALL IN PRODUCT:" + product);

  return (
    <>
      <h3>Search page</h3>
      {product.map((item) => (
        <div key={item["key"]}>
          <h1>
            {item.productName} - ${item.price}
          </h1>
          <h3>{item.description}</h3>
        </div>
      ))}
    </>
  );
}
export default Search;
