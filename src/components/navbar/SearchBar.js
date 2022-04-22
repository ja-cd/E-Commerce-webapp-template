import classes from "./Navbar.module.css";

import { useHistory } from "react-router-dom";

function SearchBar() {
  const history = useHistory();

  function formSubmitHandler(event) {
    event.preventDefault();
    console.log(event.target[0].value);
    history.push({
      pathname: "/search/",
      search: event.target[0].value,
    });
  }
  //TODO create api call that pulls suggestions using search term for showing to user
  return (
    <>
      <form className={classes.format} onSubmit={formSubmitHandler}>
        <input type="text" name="value" className={classes.form} />
      </form>
      <div>helaasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdaslo</div>
    </>
  );
}

export default SearchBar;
