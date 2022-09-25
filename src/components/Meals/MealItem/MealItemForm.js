import classes from './MealItemForm.module.css';
import {useRef,useState} from 'react';
import Input from '../../UI/Input';
import React from 'react';
const MealItemForm = (props) => {
    const amountInputRef=useRef();
    const [valid,setValid] = useState(true);
    const submit=e=>{
        e.preventDefault();


        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;
        if(enteredAmount.trim().length===0 || enteredAmountNumber > 5 || enteredAmountNumber < 1){
            setValid(false);
            return;
        }
        props.onAddToCart(enteredAmountNumber);
    }
    return (
        <form className={classes.form} onSubmit={submit}>
            <Input 
            ref = {amountInputRef}
            label ="Amount" 
            input={{
            id: 'amount_' + props.id,
            type:'number',
            min:'1',
            max:'5',
            step:'1',
            defaultValue:'1'
         }}/>
            
            <button>+ ADD</button>
            {!valid && <p>Please enter a number in range 1 to 5</p>}
        </form>
    );
};
export default MealItemForm;