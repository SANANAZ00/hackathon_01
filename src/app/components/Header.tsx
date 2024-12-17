import { TiThMenu } from "react-icons/ti";
import { CgProfile } from "react-icons/cg";
import { FiShoppingCart } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";
import { SheetSide } from "./sheet";
import { NavigationMenuDemo } from "./NavigationMenu";

export default function Header() {
    return (
        <header className=" w-full h-[60px] bg-white flex justify-between items-center">
            {/* left */}
            <div className="flex justify-center items-center">
                <SheetSide />
                <h1 className="text-xl sm:text-3xl font-bold pl-2">SHOP.CO</h1>
            </div>
            {/* navbar */}
            <ul className="hidden md:block">
                <li className="space-x-5 flex items-center">
                    <Link href={""}> <NavigationMenuDemo /></Link>
                    <Link href={""}>On Sale</Link>
                    <Link href={""}>New Arrivals</Link>
                    <Link href={""}>Brands</Link>
                </li>
            </ul>
            {/* search input */}
            <div className="hidden md:block">
                <div className="flex  justify-start items-center w-[330px] h-[40px] rounded-[62px] bg-[#F0F0F0]">
                    <CiSearch className="text-xl ml-2" />
                    <input placeholder="search for products..." className="w-full ml-2 outline-none h-full rounded-[62px] bg-[#F0F0F0]"></input>
                </div>
            </div>

            {/* cart */}
            <div className="flex items-center mr-7 space-x-5">
                <CiSearch className="text-xl ml-2 md:hidden" />
                <FiShoppingCart className="text-2xl" />
                <CgProfile className="text-2xl" />
            </div>
        </header>
    );
}
