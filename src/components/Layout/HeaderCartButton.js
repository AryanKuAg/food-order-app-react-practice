import React, {useContext} from 'react'

import CartIcon  from '../Cart/CartIcon'
import classes from "./HeaderCartButton.module.css"
import CartContext from '../../store/cart-context'

function HeaderCartButton(props) {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((cur, item) => {
    return cur + item.amount;
  }, 0)
  useContext(CartContext);
  return (
    <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>

        <span className={classes.badge}>{numberOfCartItems}</span>

    </button>
  )
}

export default HeaderCartButton