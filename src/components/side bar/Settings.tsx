import { IoLanguage } from "react-icons/io5"
import { IoMdListBox } from "react-icons/io"
import { RiApps2Line } from "react-icons/ri"

function Settings() {
    const icons = [
        {id: 1, icon: <IoLanguage   size={20} color="#868686"/>, title: 'Language Settings'},
        {id: 2, icon: <IoMdListBox  size={20} color="#868686"/>, title: 'General Settings'},
        {id: 3, icon: <RiApps2Line  size={20} color="#868686"/>, title: 'Font Settings'},
        {id: 4, icon: <RiApps2Line  size={20} color="#868686"/>, title: 'Appearance Settings'},
        
    ]
    
  return (
      <div className="flex flex-col gap-6 items-center m-9">
            <h1 className="text-[#393939] font-bold text-xl">Settings</h1>
        <ul className="flex flex-col gap-4">
            {icons.map((item) => 
            <li className=" w-72 h-14 flex items-center gap-4 rounded-md bg-white" key={item.id}>
                <button className="bg-slate-200 p-2 rounded-full">{item.icon}</button>
                <p className="text-[#868686]">{item.title}</p>
            </li>)}

            
        </ul>
    </div>
    )
}


export default Settings