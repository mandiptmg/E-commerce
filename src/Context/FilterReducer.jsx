const FilterReducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_FILTER_PRODUCTS':
      let priceArr = action.payload.map(item=> item.price)

      let maxPrice = Math.max(...priceArr);
      return {
        ...state,
        filterProducts: [...action.payload],
        allProducts: [...action.payload],
        filter:{...state.filter, maxPrice, price: maxPrice},
      }

    case 'SET_GRID_VIEW':
      return {
        ...state,
        gridView: true,
      }

    case 'SET_LIST_VIEW':
      return {
        ...state,
        gridView: false,
      }

    case 'SORT_VALUE':
      //  let useStorValue = document.getElementById('sort');
      //  let sortValue = useStorValue.options[useStorValue.selectedIndex].value;
      return {
        ...state,
        sortingValue: action.payload,
      }

    case 'GET_SORT_VALUE':
      let newSortData;

      const { filterProducts, sortingValue } = state
      let tempSortData = [...filterProducts]

      const sortProducts = (a, b) => {
        if (sortingValue === 'lowest') {
          return a.price - b.price
        }
        if (sortingValue === 'highest') {
          return b.price - a.price
        }
        if (sortingValue === 'a-z') {
          return a.name.localeCompare(b.name)
        }
        if (sortingValue === 'z-a') {
          return b.name.localeCompare(a.name)
        }
      }

      newSortData = tempSortData.sort(sortProducts)
      return {
        ...state,
        filterProducts: newSortData,
      }

      case 'UPDATE_FILTER_VALUE':
        const {name, value} = action.payload;
        return {
          ...state,
          filter:{
            ...state.filter,
            [name]:value
          }
        }
        
        case 'FILTER_PRODUCTS':
          let {allProducts} = state;
          let tempFilterProducts = [...allProducts];

          const {text,category,company,colors,price} = state.filter;

          if(text){
            tempFilterProducts = tempFilterProducts.filter(item=>{
              return item.name.toLowerCase().includes(text)
            })
            }
             if (category !== 'all') {
               tempFilterProducts = tempFilterProducts.filter((item) => {
                 return item.category === category
               })
             }
              if (company !== 'all') {
                tempFilterProducts = tempFilterProducts.filter((item) => {
                  return item.company.toLowerCase() === company.toLowerCase()
                })
              }

               if (colors!== 'all') {
                 tempFilterProducts = tempFilterProducts.filter((item) => {
                   return item.colors.includes(colors)
                 })
               }
             
               if(price === 0){
                tempFilterProducts=tempFilterProducts.filter(item=>{
                  return item.price == price;
                })
               }
               else{
                 tempFilterProducts=tempFilterProducts.filter(item=>{
                  return item.price <= price
                 })
               }
          return {
            ...state,
            filterProducts: tempFilterProducts
          }

         case 'CLEAR_FILTER':
          return {
            ...state,
            filter: {
              ...state.filter,
              text: '',
              category: 'all',
              company: 'all',
              colors: 'all',
              price:state.filter.maxPrice
            },
          }

    default:
      return state
  }
}

export default FilterReducer
