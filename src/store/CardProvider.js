import React, { useReducer } from 'react';
import CardContext from './card-context';
const defaultCardState = {
    items: [],
    totalAmount: 0
};
const cardReducer = (state, action) => {
    if (action.type === 'ADD') {
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        const existingCartItemIndex = state.items.findIndex(
            item => item.id === action.item.id
        );
        const existingCartItem = state.items[existingCartItemIndex];
        let updatedItem;
        let updatedItems;
        if (existingCartItem) {
            updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }
        else {
            updatedItems = state.items.concat(action.item);

        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    if (action.type === 'REMOVE') {
        const existingCartItemIndex = state.items.findIndex(
            item => item.id === action.id
        );
        console.log('REMOVE');
        const existingItem = state.items[existingCartItemIndex];
        const updatedTotalAmount = state.totalAmount - existingItem.price;
        let updatedItems;
        if (existingItem.amount === 1) {
            updatedItems = state.items.filter((item) => action.id !== item.id);

        }
        else {
            const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    return defaultCardState;
};

const CardProvider = props => {
    const [state, dispatch] = useReducer(cardReducer, defaultCardState)
    const addItemCH = item => {
        dispatch({
            type: 'ADD',
            item: item
        })
    };
    const removeItemCH = id => {dispatch({
        type:'REMOVE',
        id:id
    }) };
    const cardContext = {
        items: state.items,
        totalAmount: state.totalAmount,
        addItem: addItemCH,
        removeItem: removeItemCH
    }
    return (

        <>
            <CardContext.Provider value={cardContext}>
                {props.children}
            </CardContext.Provider>
        </>
    );
};
export default CardProvider;