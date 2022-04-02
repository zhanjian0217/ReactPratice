/* eslint-disable react/require-default-props */
import PropTypes from 'prop-types';

const FunctionalCard01 = (props) => {
  const { img, name, children } = props;
  return (
    <div className="card">
      <img className="img" src={img} alt={name} />
      <div className="name">
        name:
        {name}
      </div>
      <div className="quote">
        quote:
        {children}
      </div>
    </div>
  );
};

FunctionalCard01.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default FunctionalCard01;
