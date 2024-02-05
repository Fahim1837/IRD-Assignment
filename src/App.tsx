import Categories from "./components/categories/Categories"
import NavBar from "./components/navigation/NavBar"
import Settings from "./components/side bar/Settings"
import SideBar from "./components/side bar/SideBar"

function App() {
  	return (
		<div className="bg-[#F7F8FA]">
   		<div className="grid grid-cols-8 gap-7 ">
			<div className="row-span-3"><SideBar/></div>
			<div className="col-span-7 row-span-1 "><NavBar/></div>
			<div className="col-span-2 "><Categories/></div>
			<div className="col-span-3 ">main</div>
			<div className="col-span-2 "><Settings/></div>
			"
		</div>
		</div>
  )
}
// tablet:grid-cols-8 mobile:grid-cols-4
export default App