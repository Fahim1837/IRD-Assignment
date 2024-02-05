import Login from "./Login"
import PageTitle from "./PageTitle"
import Search from "./Search"

function NavBar() {
  return (
    <div className="flex flex-row justify-between items-center" >
        <PageTitle/>
      <Search/>
      <Login/>
    </div>
    )
}

export default NavBar