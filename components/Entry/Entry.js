import styles from './Entry.module.css'
import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'
export default function Entry({ entry }) {
  const [clicked, setClick] = useState(false)

  return (
    <>
      <div onClick={() => setClick(!clicked)} className="h-60 w-60 rounded-xl flex flex-col shadow-2xl bg-gray-800 overflow-hidden">
        <div className="relative w-full h-3/4">
          <Image alt='app image' src={entry.thumbnail.url} layout="fill" objectFit="cover" />
        </div>
        <div className="w-full h-1/4 p-4 text-[1rem]">
          {entry.title}
        </div>
      </div>
      {clicked && <div onClick={() => setClick(!clicked)} className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 rounded-2xl bg-white"></div>}
    </>
  )

}

// style={{ background: `white url(${props.imgsrc}) center no-repeat` }}
