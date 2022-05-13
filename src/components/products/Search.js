import { useParams } from "react-router-dom";

function Search() {
  const params = useParams();
  return (
    <>
      <h3>Search page</h3>
      <h3>{params.searchTerm}</h3>
    </>
  );
}
export default Search;
