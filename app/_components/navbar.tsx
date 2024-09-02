"use client"; // Add this line at the top

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname()

    const links = [
        {href: "/", label: "Home"},  {href: "/dashboard", label: "Dashboard"},  {href: "/blog", label: "Blog"},  {href: "/contact", label: "Contact"},
    ]

    return (
        <nav className="navbar sticky top-0 bg-blue-600 text=white flex gap-8 py-4 px-8">
            {links.map(link => (
                <Link href={link.href} style={pathname == link.href ? {textDecorationLine: "underline"}: {}}>{link.label}</Link>
            ))}

        </nav>
    )
}