import axios from 'axios'
import { createContext, useContext, useEffect, useReducer } from 'react'
const API = 'https://api.pujakaitem.com/api/products'

import reducer from './Reducer'

const AppContext = createContext()

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  singleProduct: {},
  isSingleLoading: false,
}

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const getProducts = async (url) => {
    dispatch({ type: 'SET_LOADING' })
    try {
      const response = await axios.get(url)
      const products = await response.data
      dispatch({ type: 'SET_API_DATA', payload: products })
    } catch (error) {
      dispatch({ type: 'API_ERROR' })
    }
  }

  //single product
  const getSingleProduct = async (url) => {
    dispatch({ type: 'SET_SINGLE_LOADING' })
    try {
      const response = await axios.get(url)
      const singleProduct = await response.data
      dispatch({ type: 'SET_SINGLE_PRODUCT', payload: singleProduct })
    } catch (error) {
      dispatch({ type: 'API_SINGLE_ERROR' })
    }
  }
  useEffect(() => {
    getProducts(API)
  }, [])

  return (
    <AppContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
