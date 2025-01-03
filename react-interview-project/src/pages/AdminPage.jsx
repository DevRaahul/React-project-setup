import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/slices/counter";
import { Link } from "react-router-dom";

const AdminPage = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <ul>
          <li>
            <Link to={"/reduxCounter"} replace>
              Redux Counter
            </Link>
          </li>
          <li>
            <Link to={"/typeAheadDemo"} replace>
              TypeAhead Demo
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default AdminPage;
