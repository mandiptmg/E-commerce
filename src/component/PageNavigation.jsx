import { NavLink } from "react-router-dom"
const PageNavigation = ({title}) => {
  return (
    <div className="m-3 text-xl">
    <NavLink className='capitalize text-indigo-600' to = '/'>
     Home
    </NavLink>/{title} 
    </div>
  )
}

export default PageNavigation;