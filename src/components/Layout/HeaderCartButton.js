import React, { useContext, useState } from "react";
import classes from './HeaderCartButton.module.css';
import CartIcon from "../Cart/CartIcon";
// import Cart from '../Cart/Cart';
import cardContext from '../../store/card-context';
const HeaderCartButton = (props) => {
    //   const [state,setState]=useState(false);  
    //   const handle=(e)=>{
    //     setState(true);
    //   }
    const Ctx = useContext(cardContext);
    const number = Ctx.items.reduce((cN, item) => {
        return cN + item.amount;
    }, 0);
    return (
        <button onClick={props.onShow} className={classes.button}>
            <span className={classes.icon}><CartIcon /></span>
            {/* {state && <Cart/>} */}
            <span>
                Your Cart
            </span>
            <span className={classes.badge}>{number}</span>
        </button>
    );
}
export default HeaderCartButton;