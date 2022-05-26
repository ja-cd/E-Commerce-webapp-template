import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchFull } from "../store/SearchActions";
import { searchActions } from "../store/SearchSlice";

function Search() {
  const dispatch = useDispatch();
  const params = useParams();
  const product = useSelector((state) => state.search.productSearchResults);
  const showInd = useSelector((state) => state.search.showIndividual);
  const prodChanged = useSelector((state) => state.search.prodChanged);

  useEffect(() => {
    dispatch(fetchFull(params.searchTerm));
  }, [params.searchTerm]);

  return (
    <>
      <h3>Search page</h3>
      {!showInd && <h1>LOADING</h1>}
      {showInd && (
        <div>
          {product.map((item) => (
            <div key={item["key"]}>
              <h1>
                {item.productName} - ${item.price}
              </h1>
              <h3>{item.description}</h3>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
export default Search;
