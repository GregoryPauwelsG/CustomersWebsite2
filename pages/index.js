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
         <h1 className='display-4'>Test Header</h1>
        <p>Website deployed to Netlify. </p>
        <p>React app is loaded on this page showing the first 5 objects with a Category equal to 'Verwerker' </p>
        <embed type="text/html" src="https://testreactapprouter.cfapps.us10.hana.ondemand.com/#/tickets/erDcyxv5WsDuK1XJ4AaQ3hyLV1POSQhN/glittering-platypus-6e06cd.netlify.app\_next\static\css\3dad7f4af289e3f8.css/Verwerker" width="700" height="400"></embed>
      </main>

      <Footer />
    </div>
  )
}
