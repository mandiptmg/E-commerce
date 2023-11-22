const CartReducer = (state, action) => {
  if (action.type === 'ADD_TO_CART') {
    let { id, amount, colour, product } = action.payload

    // to existing product
    let existingProduct = state.cart.find((curItem) => {
      return curItem.id === id + colour
    })
    if (existingProduct) {
      let updatedProduct = state.cart.map((curItem) => {
        if (curItem.id === id + colour) {
          let newAmount = curItem.amount + amount
          if (newAmount >= curItem.max) {
            newAmount = curItem.max
          }

          return {
            ...curItem,
            amount: newAmount,
          }
        } else {
          return curItem
        }
      })
      return {
        ...state,
        cart: updatedProduct,
      }
    } else {
      let cartProduct = {
        id: id + colour,
        amount,
        colour,
        name: product.name,
        image: product.image[0].url,
        price: product.price,
        max: product.stock,
      }

      return {
        ...state,
        cart: [...state.cart, cartProduct],
      }
    }
  }

  if (action.type === 'REMOVE_ITEM') {
    let updatedCart = state.cart.filter(
      (curItem) => curItem.id !== action.payload
    )
    return {
      ...state,
      cart: updatedCart,
    }
  }

  if (action.type === 'CLEAR_CART') {
    return {
      ...state,
      cart: [],
    }
  }

  if (action.type === 'SET_INCREASE') {
    let updatedProduct = state.cart.map((newItem) => {
      if (newItem.id === action.payload) {
        let incAmount = newItem.amount + 1
        if (incAmount >= newItem.max) {
          incAmount = newItem.max
        }
        return {
          ...newItem,
          amount: incAmount,
        }
      } else {
        return newItem
      }
    })
    return {
      ...state,
      cart: updatedProduct,
    }
  }

  if (action.type === 'SET_DECREASE') {
    let updatedProduct = state.cart.map((newItem) => {
      if (newItem.id === action.payload) {
        let decAmount = newItem.amount - 1
        if (decAmount <= 1) {
          decAmount = 1
        }
        return {
          ...newItem,
          amount: decAmount,
        }
      } else {
        return newItem
      }
    })
    return {
      ...state,
      cart: updatedProduct,
    }
  }

  // if (action.type === 'CART_TOTAL_ITEM'){
  //      const totalItems = state.cart.reduce((accumulator , currentValue)=>{
  //           return accumulator+currentValue.amount;
  //      },0);
  //      return{
  //           ...state,
  //           total_item:totalItems,
  //      }
  // }

  // if(action.type === 'TOTAL_PRICE'){
  //      let totalPrice = state.cart.reduce((initalVal,currentValue)=>{
  //           const {price, amount} = currentValue;
  //           initalVal = initalVal + price * amount;
  //           return initalVal;
  //      }, 0)
  //      return {
  //           ...state,
  //           total_price : totalPrice,
  //      }
  // }

  if (action.type === 'CART_TOTAL_PRICE_ITEM') {
    let { total_item, total_price } = state.cart.reduce(
      (initalVal, currentValue) => {
        const { price, amount } = currentValue
        initalVal.total_item += amount
        initalVal.total_price += price * amount
        return initalVal
      },
      {
        total_item: 0,
        total_price: 0,
      }
    )
    return {
      ...state,
      total_item,
      total_price,
    }
  }

  return state
}

export default CartReducer
