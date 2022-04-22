import { useParams } from "react-router-dom";

function Search() {
  const params = useParams();

  console.log(params)
  return (
    <>
      <h3>Search page</h3>
    </>
  );
}
export default Search;
