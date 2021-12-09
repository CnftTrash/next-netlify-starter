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
        <p className="picture">
    
     <div id="x"></div>
  <script>

    var img = document.createElement("img");
    img.src = "https://raw.githubusercontent.com/CnftTrash/next-netlify-starter/main/trash-lord.png";

    var div = document.getElementById("x");
    div.appendChild(img);
    //block.setAttribute("style", "text-align:center");

    </script>
 
        </p>
  </body>
      </main>

      <Footer />
    </div>
  )
}
