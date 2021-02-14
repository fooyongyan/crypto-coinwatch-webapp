import Layout from '../components/layout/Layout' 
import styles from '../../styles/Home.module.css'
export default function Home() {
  return (
    <Layout title = "Home Page"> 
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Platform Watch
        </h1>
      </main>
    </Layout>
  )
}
