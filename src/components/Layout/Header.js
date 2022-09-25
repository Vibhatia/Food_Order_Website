import React from "react";
import meals from '../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";

const Header = (props)=>{
    return <>
    <header className={classes.header}>
      <h1>React Meals</h1>
      <HeaderCartButton onShow={props.onShow} />
    </header>
    <div className={classes['main-image']}>
      <img src={meals} alt="Meals"/>  
    </div>
    </>
}
export default Header;