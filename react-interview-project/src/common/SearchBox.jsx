import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

const SearchBox = (props) => {
  const { id, name, label, placeholder, autoComplete, maxItems, styles, debounceWait, listBox, errorMsg, noItemMsg } = props;

  const [query, setQuery] = useState("");

  useEffect(() => {
    const [data] = useFetch(query);
  }, [query]);

  const handleChange = (e) => {
    setQuery(e?.target?.value);
  };

  return (
    <>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <br />
      <input name={name} id={id} className={styles.input} value={query} onChange={handleChange} />
    </>
  );
};

export default SearchBox;
