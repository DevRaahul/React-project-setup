import React from "react";
import ListBox from "../common/ListBox";
import SearchBox from "../common/SearchBox";

const TypeAheadComponent = () => {
  return (
    <>
      <SearchBox
        id="personName"
        name="personName"
        label="Enter Name"
        placeholder="Type here"
        autoComplete={true}
        maxItems={5}
        styles={{
          label: "",
          input: "",
        }}
        debounceWait={400}
        listBox={(item) => <ListBox items={items} />}
        errorMsg={() => <p>Somthing went wrong.</p>}
        noItemMsg={() => <p>No matching result found.</p>}
      />
    </>
  );
};

export default TypeAheadComponent;
