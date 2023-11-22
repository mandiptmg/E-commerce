import { createContext, useContext, useEffect, useReducer } from 'react';
import reducer from '../Context/CartReducer';

const CartContext = createContext();

const getLocalData = () =>{
  let localGetData = localStorage.getItem('tamangCart');
  // if(localGetData === [])
  // {
  //   return [];
  // }else{
  //   return JSON.parse(localGetData) ;
  // }
  let parseData = JSON.parse(localGetData);
  if(!Array.isArray(parseData)) return [];
  else return parseData;
}

const initalState = {
  //  cart:[],
   cart:getLocalData(),
  total_item: '',
  total_price: '',
  shipping_fee: 50000,
}

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initalState)

  const addToCard = (id, colour, amount, product) => {
    dispatch({ type: 'ADD_TO_CART', payload: { id, amount, colour, product } })
  }

  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id })
  }

  //  to clear cart
  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }

  //decrease and increase
  const setDecrease = (id) => {
    dispatch({ type: 'SET_DECREASE', payload: id })
  }

  const setIncrease = (id) => {
    dispatch({ type: 'SET_INCREASE', payload: id })
  }

  useEffect(() => {
    // dispatch({type:'TOTAL_PRICE'});
    // dispatch({ type: 'CART_TOTAL_ITEM' })
    dispatch({ type: 'CART_TOTAL_PRICE_ITEM' })
    localStorage.setItem('tamangCart', JSON.stringify(state.cart))
  }, [state.cart])

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCard,
        removeItem,
        setDecrease,
        setIncrease,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => {
  return useContext(CartContext)
}
