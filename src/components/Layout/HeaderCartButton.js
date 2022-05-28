import React, {useContext, useEffect, useState} from 'react'

import CartIcon  from '../Cart/CartIcon'
import classes from "./HeaderCartButton.module.css"
import CartContext from '../../store/cart-context'

function HeaderCartButton(props) {
  const [btnIsHighlightedn, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((cur, item) => {
    return cur + item.amount;
  }, 0)
  
  const {items} = cartCtx;

  const btnClasses = `${classes.button} ${btnIsHighlightedn ? classes.bump: ''}`;

  useEffect(() => {
    if(cartCtx.items.length === 0){
      return ;
    }
    setBtnIsHighlighted(true)

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300)

    return () => {
      clearTimeout(timer);
    }
  }, [items])
  return (
    <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>

        <span className={classes.badge}>{numberOfCartItems}</span>

    </button>
  )
}

export default HeaderCartButton