import React,{useState} from "react";
import Modal from './components/UI/Modal'
import Header from './components/Layout/Header'
import Meals from "./components/Meals/Meals";
import Cart from './components/Cart/Cart';
import CardProvider from "./store/CardProvider";
function App() {
  const [show,setShow]=useState(false);
  const showCard=()=>{
    setShow(true);
  };
  const hideCard=()=>{
    setShow(false);
  };
  return (
    <CardProvider>
      {show && <Cart onHide={hideCard}/>}
      
      <Header onShow={showCard} />
      <main> 
         <Meals />
       </main>
      
    </CardProvider>
  );
}

export default App;
