// Array map
import React from 'react';

// const numbers = [1, 2, 3, 4, 5];
// const doubled = numbers.map((number) => number * 2);
// console.log(doubled);

const Example10 = () => {
  const [list, setList] = React.useState(['學會 JS', '學會 React', '年薪百萬']);
  const atAddClick = () => {
    const newList = list.concat(new Date().toString());
    setList(newList);
  };
  return (
    <section data-name="Example10">
      <button className="my-btn" onClick={atAddClick}>
        Add
      </button>
      <ol className="list">
        {list.map((text) => {
          return <li key={text}>{text}</li>;
        })}
      </ol>
    </section>
  );
};

export default Example10;
