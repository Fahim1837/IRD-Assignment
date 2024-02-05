import { CiSearch } from "react-icons/ci"

function Search() {
  return (
    <div className="m-3">
        <div className="flex rounded-lg pl-4 py-1 pr-1 w-full bg-white justify-between gap-4 ">
               <button className="px-4 py-2.5 rounded-md"><CiSearch size={24}/></button>
               <input type="text" placeholder="Search by Categories" className="w-full focus:outline-none font-[inter]"/>
        </div>
    </div>
  )
}

export default Search