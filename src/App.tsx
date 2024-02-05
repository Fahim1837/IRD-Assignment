import NavBar from "./components/navigation/NavBar"
import SideBar from "./components/side bar/SideBar"

function App() {
  	return (
		<>
   		<div className="grid grid-cols-8 laptop:grid-cols-6 tablet:grid-cols-4  gap-[10px]">
			<NavBar/>
			<div className="col-span-1 bg-slate-300"><SideBar/></div>
			<div className="col-span-2 bg-slate-400 tablet:hidden">Categories</div>
			<div className="col-span-3 bg-slate-500">Main Section</div>
			<div className="col-span-2 bg-slate-600 laptop:hidden">Side Settings</div>
   		</div>
		</>
  )
}
// tablet:grid-cols-8 mobile:grid-cols-4
export default App