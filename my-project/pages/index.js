import Head from 'next/head'
import {AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube } from "react-icons/ai"


export default function Home() {
  return (
    <div>
      <Head>
        <title>alex gathungu</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=" bg-white px-10 "  >
        <section className=" bg-emerald-600 h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl"> I am happy you are here</h1>
            <ul className="flex items-center" >
              <li> <a className=" bg-gradient-to-r bg-purple-400 text-white px-4 py-2 rounded  ml-8"href="https://github.com/GathunguAlex"> Github account</a></li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-blue "> Gathungu alex</h2>
            <h3 className="text-2xl py-2"> Aspiring developer</h3>
            <p className="text-md py-5 leading-8 text-gray-800"> student at Moriga school    </p>
          </div>
          <div>


          </div>          

 </section>
        <div className="text-5xl flex justify-center gap-16 py-3 text-gray">

          <AiFillLinkedin></AiFillLinkedin>
          <AiFillTwitterCircle></AiFillTwitterCircle>
          <AiFillYoutube></AiFillYoutube>
        </div>
      </main>

      
    </div>
  )
}
