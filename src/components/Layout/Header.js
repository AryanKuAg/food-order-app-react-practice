import {Fragment} from 'react'
import mealsImage from "../../assets/meals.jpg"
import classes from "./Header.module.css"
import HeaderCartButton from './HeaderCartButton'

function Header() {
  return (
    <Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton />

        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="Full food!!!"/>
        </div>
    </Fragment>
  )
}

export default Header