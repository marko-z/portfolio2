import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Entry from '../components/Entry/Entry.js'
import path from 'path'
import fs from 'fs'
import { useEffect } from 'react'
import Navbar from '../components/Navbar/Navbar'


export default function Index({ entries }) {
  return (
    <>
      <Head>
        <title>Portfolio&sup2;</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="p-8 sm:p-24">
        {/* <div style={{width: '30px', borderRadius: '5px', overflow: 'hidden'}}>
          <Image src={'/images/WICKED.png'} layout='fill' objectFit='contain'/>
        </div> */}
        <div className="flex justify-between">
          <div className="flex flex-col">
            <div className="text-[4rem] sm:text-[6rem]">
              Marek Zakrzewski
            </div>
            <div className="text-[2rem] text-gray-500">
              Developer
            </div>
          </div>
          <div className="relative w-64 h-64">
            <Image
              alt="wicked"
              src="/images/WICKED.png"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        
        <div id="apps">
        <div className="grid w-fit grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {entries.map((entry,index) => {
              return (
                <div key={index} className="h-60 w-60 rounded-xl flex flex-col shadow-2xl bg-gray-900 overflow-hidden">
                  <div className="relative w-full h-3/4">
                    <Image alt='app image' src={entry.metadata.imgsrc} layout="fill" objectFit="cover" />
                  </div>
                  <div className="w-full h-1/4 p-4 text-[1rem]">
                    {entry.metadata.title}
                  </div>
                </div>
              )
              
              // <Entry
              //   key={entry.id}
              //   title={entry.metadata.title}
              //   summary={entry.metadata.summary}
              //   imgsrc={entry.metadata.imgsrc}
              //   href={`/entries/${entry.id}`}
              // />
            })}
        </div>
        <div className={styles.container}>
          <ul className={styles.list}>
          </ul>
        </div>
        </div>
      </div>
      <footer className={styles.footer}>
        Marek Zakrzewski
      </footer>
    </>
  )
}

export async function getServerSideProps() {
  // apparently you can't access imported module properties before you've resolved it as a promise
  // this is some time-consuming debugging right here
  const filenames = fs.readdirSync(path.resolve(process.cwd(), 'pages', 'entries'))
  const metadata = await Promise.all(filenames.map(async (filename) => [await require(`./entries/${filename}`), filename.replace(/\.mdx$/, '')]))
  const entries = metadata.map(([moduleExport, moduleName]) => ({ metadata: moduleExport.meta, id: moduleName }))

  // const entryModules = await Promise.all(
  //   filenames.map(async (filename) => [import(`./entries/${filename}`), filename.replace(/\.mdx$/,'')])
  // )
  // const postData = entryModules.map(([m,id]) => ({ metadata: m.meta ? m.meta : null, id}));
  // 
  return {
    props: {
      entries: entries
    },
  }



  // matter doesnt parse mdx files properly

  // const filenames = fs.readdirSync(path.resolve(process.cwd(),'pages','entries'));
  // const postData = filenames.map((filename) => {
  //   const id = filename.replace(/\.mdx$/,'');

  //   const filepath = path.resolve(process.cwd(),'pages','entries', filename)

  //   const filedata = fs.readFileSync(filepath,{encoding: 'utf8'})
  //   const matterResult = matter(filedata)
  //   console.log('\n\n\n')
  //   console.log(JSON.stringify(matterResult))
  //   console.log('\n\n\n')
  //   return {
  //     id,
  //     metadata: matterResult.data
  //   }

  // })
  // console.log(typeof postData)
  // console.log(postData)
  // return {
  //   props: {
  //     postData: postData
  //   }
  // };

}