import React from 'react'
import Link from 'next/link'
import { Bug } from 'lucide-react'


const navbar = () => {
    const links = [{id:1, label:"Dashboard", href:"/dashboard"}, {id:2, label:"Issues", href:"/issues/view"}]
  return (
    <header>
        <nav>
            <Link href='/'><Bug />Bug Tracker</Link>
            <ul>
                {links.map((item)=>(
                    <li key={item.id}><link href={item.href}>{item.label}</link></li>
                ))}
            </ul>
        </nav>
    </header>
  )
}

export default navbar