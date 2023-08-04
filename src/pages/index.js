import Hero from '../components/Hero'
import Form from '../components/Form'
import styles from '../styles/home.module.css'
import Link from 'next/link'
import Banner from '../components/Banner'
import Card from '../components/Card'

function Home() {

  return (
    <main className=''>
      <Hero>
        <Banner />
      </Hero>
      <h1>Blog</h1>
      <Link href="/dashboard">
      <button type="button" className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Purple</button>
      </Link>
      <div className=' mx-10 flex flex-col gap-6 md:flex-row md:flex-wrap md:justify-center '>
        <Card/>
        <Card/>
        <Card/>
      </div>
      <Form/>
    </main>
  )
}

export default Home
