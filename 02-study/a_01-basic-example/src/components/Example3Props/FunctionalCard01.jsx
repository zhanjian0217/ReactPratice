import PropTypes from 'prop-types';

// /* // TODO
const FunctionalCard01 = (props) => {
  const { img, name, children, price } = props;
  return (
    <div className="card">
      <img className="img" src={img} alt={name} />
      <div>{price + 20}</div>
      <div className="name">
        name:
        {name}
      </div>
      <div className="qoute">
        quote:
        {children}
      </div>
    </div>
  );
};
// */
// children 子元素
FunctionalCard01.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  children: PropTypes.node,
};

export default FunctionalCard01;
