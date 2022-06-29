import { useEffect } from "react";

import { NavLink } from "react-router-dom";

import classes from "./Collections.module.css";

import { fetchCollections } from "../store/SearchActions";
import { useDispatch, useSelector } from "react-redux";

function Collections() {
  const dispatch = useDispatch();

  const collections = useSelector((state) => state.search.collections);

  useEffect(() => {
    dispatch(fetchCollections());
  }, []);

  return (
    <>
      <h1 className={classes.header}>ALL COLLECTIONS</h1>
      <div className={classes.container}>
        {collections.map((item) => (
          <NavLink
            className={classes.coll}
            to={"/collections/" + item.collectionName}
          >
            <a href="">
              <img src={item.url} />
            </a>
          </NavLink>
        ))}
      </div>
    </>
  );
}

export default Collections;
