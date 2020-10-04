import React from 'react';
import Img from 'gatsby-image';
import MenuItemStyles from '../styles/MenuItemStyles';
import calculatePizzaPrice from '../utils/calculatePizzaPrice';
import formatMoney from '../utils/formatMoney';

export const PizzaOrder = ({ order, removeFromOrder, pizzas }) => (
  <>
    {order.map((singleOrder, index) => {
      const pizza = pizzas.find(
        (singlePizza) => singlePizza.id === singleOrder.id
      );

      return (
        <MenuItemStyles key={`${singleOrder.id}-${index}`}>
          <Img fluid={pizza.image.asset.fluid} />
          <h2>{pizza.name}</h2>
          <p>
            {formatMoney(calculatePizzaPrice(pizza.price, singleOrder.size))}
            <button
              type="button"
              className="remove"
              onClick={() => removeFromOrder(index)}
              title={`Button to remove ${pizza.name} from order`}
            >
              &times;
            </button>
          </p>
        </MenuItemStyles>
      );
    })}
  </>
);
