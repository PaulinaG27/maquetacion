"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import React, {use} from "react"

interface SidebarLinkProps {
    buttonName: string;
    url?: string;
}

const SidebarLink = ({buttonName, url="#"}: SidebarLinkProps) => {

    const pathname = usePathname()
    const isActive = pathname === url

  return (
    <Link href={url}>
        <li className={isActive? "active" : ""}>{buttonName}</li>
    </Link>
  )
}

export default SidebarLink