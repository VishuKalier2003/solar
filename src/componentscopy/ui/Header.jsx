import Link from "next/link";
import {Button} from "../ui/Button";
import MobileNav from "../MobileNav";
import React from "react";

//components
import Nav from "./Nav";

const Header = () => {
  return (
  <header className="py-8 xl:py-12 text-white black-background h-[6rem]">
    <div className="container mx-auto flex justify-between items-center black-background">
        {/*logo */}
        <Link href="" className='black-background'>
         <h1 className=" relative text-2xl lg:text-4xl font-semibold pl-[3rem] black-background -top-4">
          Solar <span className="text-blue-500 dark:text-blue-500 black-background">Vision </span>
         </h1>
        </Link>
        {/* {desktop nav} */}
        <div className="hidden xl:flex item-center gap-8 black-background">
           <Nav className="black-background" />
           {/* <Link href="/contact">
           <Button>Hire me</Button>
           </Link> */}
        </div>

        {/* {mobile nav} */}
        <div className="xl:hidden black-background">
          <MobileNav />
        </div>
    </div>
  </header>
  );
};

export default Header
