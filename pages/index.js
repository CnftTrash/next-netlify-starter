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
  <script>

    var img = document.createElement("img");
    img.src = "https://github.com/CnftTrash/next-netlify-starter/blob/main/trash-lord.png?raw=true";

    var div = document.getElementById("x");
    div.appendChild(img);
    //block.setAttribute("style", "text-align:center");

    </script>
        </p>
      </main>

      <Footer />
    </div>
  )
}
