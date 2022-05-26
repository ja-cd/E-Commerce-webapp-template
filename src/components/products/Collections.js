import { useEffect } from "react";

function Collections() {
  useEffect(() => {
    fetch("http://localhost:5000/collections/")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
      });
  }, []);

  return <p>collections component</p>;
}
export default Collections;
