import {Fragment} from 'react'
import mealsImage from "../../assets/meals.jpg"
import classes from "./Header.module.css"
import HeaderCartButton from './HeaderCartButton'

function Header(props) {
  return (
    <Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton onClick={props.onShowCart}/>

        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="Full food!!!"/>
        </div>
    </Fragment>
  )
}

export default Header