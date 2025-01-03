import React, { useEffect, useState } from "react";

const useFetch = ({ query }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState({});

  const fetchData = async () => {
    try {
      const response = await fetch("https://swapi.dev/api/people/?search=" + query);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json();
      setData(data.results);
      console.log("data", data);
    } catch (e) {
      console.log("error", e);
      setError(e);
    }
  };

  useEffect(() => {
    fetchData(query);
  }, [query]);

  return [data, setData, error];
};

export default useFetch;
