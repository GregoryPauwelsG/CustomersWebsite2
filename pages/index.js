import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Customer's Webiste 2" />
        <p>Website deployed to Netlify. </p>
        <p>React app is loaded on this page showing the first 5 objects with a Category equal to 'Verwerker' </p>
        <embed type="text/html" src="https://testreactapprouter.cfapps.us10.hana.ondemand.com/#/tickets/Verwerker" width="700" height="400"></embed>
        <a href="javascript:void(0);" NAME="Error Handling"
        title="ZeroDivisionError handling"
        onClick=window.open("window-child.html","Ratting","width=550,height=170,left=150,top=200,toolbar=0,status=0,");>Click here to open the child window</a>
      </main>

      <Footer />
    </div>
  )
}
