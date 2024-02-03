import { CiSearch } from "react-icons/ci"

function Search() {
  return (
    <div className="m-3">
        <div className="flex rounded-lg pl-4 py-1 pr-1 max-w-96 bg-white justify-between gap-4 ">
               <input type="text" placeholder="Search by Dua Name" className="w-full focus:outline-none font-[inter]"/>
               <button className="bg-gray-200 px-4 py-2.5 rounded-md"><CiSearch size={24}/></button>
        </div>
    </div>
  )
}

export default Search