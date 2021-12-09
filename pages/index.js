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
        <p className="picture">
    <img src = "https://github.com/CnftTrash/next-netlify-starter/blob/main/trash-lord.png">
        </p>
      </main>

      <Footer />
    </div>
  )
}
