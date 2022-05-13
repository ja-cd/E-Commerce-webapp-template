export const fetchMatches = (term) => {
  return async (dispatch) => {
    const fetchData = async (term) => {
      const request = { searchTerm: term };
      console.log(request);
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
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
};
