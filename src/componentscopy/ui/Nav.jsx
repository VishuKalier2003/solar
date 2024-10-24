"use client";

import Link from "next/link";
import{ usePathname } from "next/navigation";
import React from "react";

const links = [
    {
        name: "home",
        path:"/",
    },
    {
        name: "analysis",
        path:"/analysis",
    },
    {
        name: "demo",
        path:"/demo",
    },
    {
        name: "contact us",
        path:"/contact",
    },
];

const Nav = () => {
    const pathname = usePathname();
    return(
        <nav className="flex gap-8 pr-[3rem] black-background">          { /* this is give equal spacing*/}
            {links.map((link, index) => {
                return (
                    <Link href={link.path} key={index} className={`${link.path === pathname && "text-accent border-b-2 border-accent"}
                    capitalize font-medium hover:text-accent transition-all black-background text-[1.175rem]`}>
                        {link.name}
                    </Link>
                );
            })}
         </nav>
    );
};


export default Nav
