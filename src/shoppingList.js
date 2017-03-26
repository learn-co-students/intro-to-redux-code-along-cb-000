import React from react;


const ShoppingList = (props) => {
  return () {
    <ul>
      {props.items.map((item, i) => {
        return <li key={i}>{item.description}</li>
        }
      )}
    </ul>
  }
}
export default ShoppingList;
