import FunctionalCard01 from './FunctionalCard01';
// import FunctionalCardFlow from './FunctionalCardFlow';

const Example3 = () => {
  return (
    <section data-name="Example3">
      <FunctionalCard01 />
      <FunctionalCard01 img="http://fakeimg.pl/300x100/ecf0f1/" name="milkmidi" price={100} />
      <FunctionalCard01 img="http://fakeimg.pl/240x80/ecf0f1/" name="奶綠茶" price={10}>
        <h1>我是子元素</h1>
      </FunctionalCard01>

      {/* <FunctionalCardFlow img="http://fakeimg.pl/240x80/ecf0f1/" name="奶綠茶" /> */}
    </section>
  );
};
export default Example3;
