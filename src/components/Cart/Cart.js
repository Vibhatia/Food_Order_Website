import classes from './Cart.module.css';
import React, { useContext } from 'react';
import CartContext from '../../store/card-context';
import Modal from '../UI/Modal';
import CartItem from './CartItem';
const Cart = (props) => {

const cartCtx = useContext(CartContext);

const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

const hasItems = cartCtx.items.length > 0;
const cartItemRemoveHandler = (id) =>{
    cartCtx.removeItem(id);
}
const cartItemHandler = item =>{
    cartCtx.addItem({...item,amount:1});
}
    const CardItems = (
        <ul className={classes['cart-items']}>
            {cartCtx.items.map((item) => (
                <CartItem 
                key = {item.id} 
                name = {item.name} 
                amount = {item.amount} 
                price = {item.price.toFixed(2)} 
                onAdd = {cartItemHandler.bind(null,item)}
                onRemove={cartItemRemoveHandler.bind(null,item.id)}/>
            ))}
        </ul>
    );
  
    return (
        <Modal onHide={props.onHide}>
            {CardItems}

            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onHide}>Close</button>
              {hasItems &&  <button className={classes.button}>Order</button>}
            </div>

        </Modal>

    );
};
export default Cart;