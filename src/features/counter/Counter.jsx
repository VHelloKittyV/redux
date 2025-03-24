import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";
import { useState } from "react";

export default function Counter() {
  const [incrementAmount, setIncrementAmount] = useState(0);

  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const addValue = Number(incrementAmount) || 0;

  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  };
  return (
    <div>
      <div className="row">
        <button onClick={() => dispatch(increment())}>+</button>
        <p>{count}</p>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      <div>
        <input
          type="text"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <div className="row">
          <button onClick={() => dispatch(incrementByAmount(addValue))}>
            Add Amount
          </button>
          <button onClick={resetAll}>reset</button>
        </div>
      </div>
    </div>
  );
}
