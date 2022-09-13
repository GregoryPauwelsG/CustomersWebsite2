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
        <p>Website deployed to Netlify. Netlify provides a development platform for web applications and dynamic websites </p>
        <p>React app is loaded on this page showing objects with a Category equal to 'Verwerker' </p>
        <embed type="text/html" src="https://testreactapprouter.cfapps.us10.hana.ondemand.com/#/tickets/Verwerker" width="700" height="400"></embed>

      </main>

      <Footer />
    </div>
  )
}
