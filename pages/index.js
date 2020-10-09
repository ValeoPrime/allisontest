import Head from 'next/head'
import Header from '../components/header/Header'
import styles from '../styles/Home.module.sass'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.container}>
          <Header/>
        </div>
      </main> 
    </div>
  )
}
