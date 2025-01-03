import { useDispatch, useSelector } from "react-redux";
import ShowCount from "./ShowCount";
import { decrement, increment } from "../redux/slices/counter";

const ReduxCounter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <div>RTK Counter example</div>
        <div>{count}</div>
        <button onClick={() => dispatch(increment())}>Add</button>
        <button onClick={() => dispatch(decrement())}>Reduce</button>
      </div>
      <div>
        <ShowCount />
      </div>
    </>
  );
};

export default ReduxCounter;
