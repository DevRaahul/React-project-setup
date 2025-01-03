import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../redux/slices/counter";

const ShowCount = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <div>{count}</div>
      <button onClick={() => dispatch(increment())}>Add</button>
      <button onClick={() => dispatch(increment())}>Reduce</button>
    </>
  );
};

export default ShowCount;
