import React from 'react';

const FCComponent = () => {
  const [count, setCount] = React.useState(0);

  // /* // TODO 1
  React.useEffect(() => {
    console.log('FC componentDidMount');
    const atWindowClick = () => {
      console.log('window click');
    };
    window.addEventListener('click', atWindowClick);
    return () => {
      console.log('FC componentWillUnmount');
      window.removeEventListener('click', atWindowClick);
    };
  }, []);
  // */

  // /* // TODO 2
  React.useEffect(() => {
    console.log(`FC count change:${count}`);
    return () => {
      console.log(`FC prev count${count}`);
    };
  }, [count]);
  // */

  return (
    <section data-name="FCComponent">
      <h2>React FC useEffect, count:{count}</h2>
      <button className="my-btn" onClick={() => setCount(count + 1)}>
        setCount
      </button>
    </section>
  );
};
export default FCComponent;
