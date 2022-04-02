import React from 'react';

/* // TODO
type BuildItemProps = {
  title: string,
  quantity: number,
  price: number,
  id: string,
  onRemoveItem: (id: string) => void,
  onUpdateQuantity: (id: string) => void,
};
// */ 

const BuildItem: React.FC<BuildItemProps> = (props) => {
  // prettier-ignore
  const {
    title,
    quantity,
    price,
    id,
    onRemoveItem,
    onUpdateQuantity,
  } = props;

  const [value, setValue] = React.useState(quantity);

  // TODO 這裡還有功能需需要實作  

  const atClick = () => {
    onRemoveItem(id);
  };
  const atInputChange = (event) => {
    // TODO 請實做功能
  };

  const totalPrice = price * quantity;
  return (
    <tr>
      <td>{title}</td>
      <td>
        <input type="number" min="1" className="quantity" value={value} onChange={atInputChange} />
      </td>
      <td>{price}</td>
      <td>{totalPrice}</td>
      <td>
        <button className="remove-item-btn btn btn-danger btn-sm" onClick={atClick}>
          Remove
        </button>
      </td>
    </tr>
  );
};

export default BuildItem;
