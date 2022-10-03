import Link from "next/link"

const navbarLinks = [
  ['My apps', '#apps'],
  ['Experience', '#experience'],
  ['Skills', '#skills'],
  ['Education & Certifications', '#education'],
]
export default function Navbar() {
  return (
    <nav className="fixed backdrop-filter bg-gray-800 bg-opacity-80 backdrop-blur-md top-0 left-0 w-full h-16 z-10 ">
      <div className="mx-auto  h-full max-w-6xl flex justify-around overflow-hidden">
        {/* <Link href="#main">
      <div className="relative h-full flex flex-col justify-center items-center">
        <div className="text-lg z-10">Marek Zakrzewski</div>
        <div className="absolute bottom-4 right-2 w-32 h-10 bg-gray-900 z-0"></div>
      </div>
      </Link> */}
        {navbarLinks.map(([name, link], index) => {
          return <Link key={index} href={link}><div className="h-full flex flex-col justify-center items-center text-base">{name}</div></Link>
        })}
        <Link href="#contact"><div className="h-full flex flex-col justify-center items-center">
          <div className="p-3 rounded-xl bg-gray-500 bg-opacity-30 flex items-center justify-center hover:bg-opacity-60"><div className="font-bold">Get in touch!</div></div>
        </div></Link>
      </div>
    </nav>
  )
}