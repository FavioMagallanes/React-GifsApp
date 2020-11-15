import { useState, useEffect } from "react";
import { getGifs } from "../helpers/GetGifs";

export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loanding: true,
  });

  useEffect(() => {
    getGifs(category).then((imgs) => {
      setTimeout(() => {
        setState({
          data: imgs,
          loanding: false,
        });
      }, 2000);
    });
  }, [category]);

  return state;
};
