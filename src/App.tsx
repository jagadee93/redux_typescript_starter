import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import {
  incremented,
  amountAdded,
  decremented,
} from "./features/counter/CounterSlice";
const App: React.FC = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  function handleClick() {
    dispatch(incremented());
  }

  function handleDecrement() {
    dispatch(decremented());
  }
  useEffect(() => {
    dispatch(amountAdded(6));
  }, []);

  const margin = {
    marginTop: "20px",
  };
  return (
    <div className="container">
      <h1>Count:{count}</h1>
      <button onClick={handleClick} style={margin}>
        Increment+
      </button>
      <button style={margin} onClick={handleDecrement}>
        decrement-
      </button>
    </div>
  );
};
export default App;
