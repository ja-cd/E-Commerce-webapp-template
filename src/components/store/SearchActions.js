import { searchActions } from "./SearchSlice";

export const fetchMatches = (term) => {
  const request = { searchTerm: term };
  return async (dispatch) => {
    const fetchData = async (term) => {
      const response = await fetch("http://localhost:5000/searchBar/", {
        method: "POST",
        body: JSON.stringify(request),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Error could not fetch");
      }
      const data = await response.json();

      return data;
    };

    try {
      const response = await fetchData();
      dispatch(searchActions.storeResults(response));
    } catch (error) {
      console.log(error);
    }
  };
};
