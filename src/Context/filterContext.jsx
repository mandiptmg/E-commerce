import { createContext, useContext, useEffect, useReducer } from "react";
import { useGlobalContext } from "../Context";
import reducer from './FilterReducer'


const FilterContext = createContext();

const initalState = {
  filterProducts: [],
  allProducts: [],
  gridView: true,
  sortingValue: 'highest',
  filter: {
    text: '',
    category: 'all',
    company: 'all',
    colors: 'all',
    price:0,
    maxPrice:0,
    minPrice:0,
  },
}

export const FilterProvider = ({children}) =>{
 const {products} = useGlobalContext();
 const [state,dispatch] = useReducer(reducer,initalState)

 //set grid view

 const setGridView = () =>{
  return dispatch({type:'SET_GRID_VIEW'});
 }

 const setListView = () => {
   return dispatch({ type: 'SET_LIST_VIEW' })
 }

//  sort function
const sorting = (e) =>{
  let userValue = e.target.value
  dispatch({type:'SORT_VALUE', payload:userValue })
}

//filter section
const updateFilterValue = (e) =>{
  let value = e.target.value;
  let name = e.target.name;
  return dispatch({type:'UPDATE_FILTER_VALUE', payload:{name,value}})
}

const filterClear = () =>{
 return dispatch({type:"CLEAR_FILTER"})
}

useEffect(() => {
  dispatch({type:'FILTER_PRODUCTS'})
  dispatch({ type: 'GET_SORT_VALUE', payload: products })
}, [products, state.sortingValue,state.filter])


 useEffect(()=>{
   dispatch({type:'LOAD_FILTER_PRODUCTS', payload:products})
 },[products])
return (
  <FilterContext.Provider
    value={{
      ...state,
      setGridView,
      setListView,
      sorting,
      updateFilterValue,
      filterClear,
    }}
  >
    {children}
  </FilterContext.Provider>
)
}

export const useFilterContext = () =>{
 return useContext(FilterContext);
}