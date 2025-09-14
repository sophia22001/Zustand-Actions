import useCountStore from '../store/useCountStore';

const Counter = () => {
  const { count, increase, decrease, reset } = useCountStore();

  return (
    <div>
      <h2>Counter</h2>
      <div>{count}</div>
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;
