import React from 'react'
import Link from 'next/link'

const Footer = () => {
  const footerList = [
    {
      id: 1,
      href: "#",
      title: "Terms & Conditions"
    },
    {
      id: 2,
      href: "#",
      title: "Privacy & Setting"
    },
    {
      id: 3,
      href: "#",
      title: "About Us"
    },
    {
      id: 4,
      href: "#",
      title: "Top Menu"
    }
  ]
  return (
    <footer>
        <ul>
          {footerList.map((item)=>(
              <li key={item.id} className='font:semi-bold text-blue-950 '>
                 <Link href={item.href}>
                      {item.title}
                 </Link>

              </li>
          ))}
        </ul>
    </footer>
  )
}

export default Footer