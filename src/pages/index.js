import Layout from '../components/Layout/Layout' 
import PlatformCard from '../components/PlatformCard/PlatformCard'
import styles from './index.module.css'

export default function Home() {
  return (
    <Layout title = "Home Page">
      <div className = {styles.sampleBody}> 
        <PlatformCard />
        <PlatformCard />
        <PlatformCard />
        <PlatformCard />
      </div> 
    </Layout>
  )
}
