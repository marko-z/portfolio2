import Link from "next/link"

const navbarLinks = [
  ['My apps', '#apps'],
  ['Work Experience', '#experience'],
  ['Education', '#education'],
  ['Skills', '#skills'],
  ['Certifications', '#certifications']
]
export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full h-20 z-10 flex justify-around bg-black">
        {navbarLinks.map(([name, link], index) => {
          return <Link  key={index} href={link}><div className="h-full flex flex-col justify-center items-center">{name}</div></Link>
        })} 
    </nav>
  )
}