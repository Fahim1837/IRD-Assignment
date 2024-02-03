import Logo from "./Logo"
import PageTitle from "./PageTitle"
import Search from "./Search"

function NavBar() {
  return (
    <>
    <div className="col-span-1 bg-blue-300 " ><Logo/></div>
    <div className="col-span-2 bg-blue-400 tablet:hidden"><PageTitle/></div>
    <div className="col-span-3 bg-blue-500 laptop:hidden "><Search/></div>
    <div className="col-span-2 bg-blue-600 laptop:col-span-3">Login</div>
    </>
    )
}

export default NavBar