import classes from "./Navbar.module.css";
import { useHistory } from "react-router-dom";
import { fetchMatches } from "../store/SearchActions";
import { useDispatch } from "react-redux";

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
    console.log(event.target.value);
    dispatch(fetchMatches(event.target.value));
  }

  return (
    <>
      <form
        className={classes.format}
        onSubmit={formSubmitHandler}
        onChange={matches}
      >
        <input type="text" name="value" className={classes.form} />
      </form>
    </>
  );
}

export default SearchBar;
