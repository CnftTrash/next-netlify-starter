import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Cnft Trash!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Coming Soon" />
    <body>
       import Image from 'next/image'

const myLoader = ({ src, width, quality }) => {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`
}

const MyImage = (props) => {
  return (
    <Image
      loader={myLoader}
      src="https://raw.githubusercontent.com/CnftTrash/next-netlify-starter/main/trash-lord.png"
      alt="Picture of the author"
      width={500}
      height={500}
    />
  )
}
  
        
      </body>
      </main>

      <Footer />
    </div>
  )
}
