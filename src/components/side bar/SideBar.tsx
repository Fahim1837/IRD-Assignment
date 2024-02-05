import { CiHome } from "react-icons/ci"
import { FaRegBookmark } from "react-icons/fa6"
import { IoMdBook } from "react-icons/io"
import { IoBulbOutline } from "react-icons/io5"
import { PiChatsTeardropThin } from "react-icons/pi"
import { RiApps2Line, RiMedicineBottleLine } from "react-icons/ri"
import Logo from "../navigation/Logo"
import Donate from "./Donate"

function SideBar() {
    const icons = [
    <CiHome               size={20} color="#868686" />,
    <RiApps2Line          size={20} color="#868686" />,
    <IoBulbOutline        size={20} color="#868686" />,
    <FaRegBookmark        size={20} color="#868686" />,
    <PiChatsTeardropThin  size={20} color="#868686" />,
    <RiMedicineBottleLine size={20} color="#868686" />,
    <IoMdBook             size={20} color="#868686" />
]
  return (
    <div className="flex flex-col gap-36 items-center m-8">
        <Logo/>
        <ul className="flex flex-col gap-7">
            {icons.map((item, index) => <li><button className="bg-slate-200 p-2 rounded-full" key={index}>{item}</button></li>)}
        </ul>
        <div className="mt-5">
            <Donate />
        </div>
    </div>
  )
}

export default SideBar
