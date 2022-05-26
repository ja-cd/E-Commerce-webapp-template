import classes from "./Navbar.module.css";
import { useHistory } from "react-router-dom";
import { fetchMatches } from "../store/SearchActions";
import { useDispatch } from "react-redux";

import { searchActions } from "../store/SearchSlice";

function SearchBar() {
  const history = useHistory();
  const dispatch = useDispatch();

  function formSubmitHandler(event) {
    event.preventDefault();
    let term = "/search/" + event.target[0].value;
    history.push({
      pathname: term,
    });
  }

  function matches(event) {
    dispatch(fetchMatches(event.target.value));
  }

  function toggleResults() {
    dispatch(searchActions.resultsOn());
  }

  return (
    <>
      <form
        className={classes.format}
        onSubmit={formSubmitHandler}
        onChange={matches}
      >
        <input
          type="text"
          name="value"
          className={classes.form}
          onClick={toggleResults}
        />
      </form>
    </>
  );
}

export default SearchBar;
