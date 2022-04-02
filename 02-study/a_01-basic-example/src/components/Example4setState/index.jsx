import React from 'react';

/**
  放兩個 Counter Component
  一個 count 為 0
  另一個 count 為 1
 */

const Counter = (props) => {
  const { initCount = 0 } = props;
  const [count, setCount] = React.useState(initCount);

  // const stateArr = React.useState(0)
  // const count = stateArr[0]
  // const setCount = stateArr[1]

  const atClick = () => {
    setCount(count + 1);
    // console.log('click');
  };
  return (
    <div className="counter">
      <div className="count">
        count:
        {count}
      </div>
      <button className="my-btn" onClick={atClick}>
        increment
      </button>
    </div>
  );
};

const Example4 = () => {
  return (
    <section data-name="Example4">
      <Counter />
      <Counter initCount={1} />
      <Counter initCount={2} />
    </section>
  );
};
export default Example4;
