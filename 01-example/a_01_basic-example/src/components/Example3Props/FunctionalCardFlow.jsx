import React from 'react';

type FunctionalCardProps = {
  img: string,
  name: string,
  children: React.ReactNode,
};

const FunctionalCardFlow: React.FC<FunctionalCardProps> = (props) => {
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

export default FunctionalCardFlow;
