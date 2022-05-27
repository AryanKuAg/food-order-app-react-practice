import React from 'react'
import CartIcon  from '../Cart/CartIcon'
import classes from "./HeaderCartButton.module.css"

function HeaderCartButton() {
  return (
    <button className={classes.button}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>

        <span className={classes.badge}>5</span>

    </button>
  )
}

export default HeaderCartButton