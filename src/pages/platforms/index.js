import Layout from '../components/Layout/Layout' 
import PlatformCard from '../../components/PlatformCard/PlatformCard'
import styles from './index.module.css'

/** 
 * @typedef Stat 
 * @property {string} label
 * @property {string} value
 * 
 * @typedef Platform
 * @property {string} title
 * @property {Stat[]} stats
 */
const data = [ 
  {
    title: "Etoro",
    stats: [
      { label: "Exposure", value: "2,000" },
      { label: "Value", value: "1250" },
      { label: "P/L", value: "-850" }
    ]
  }, 
  {
    title: "Pancake Swap",
    stats: [
      { label: "Exposure", value: "2,000" },
      { label: "Value", value: "1250" },
      { label: "P/L", value: "-850" }
    ]
  }, 
  {
    title: "Celsius Network",
    stats: [
      { label: "Exposure", value: "2,000" },
      { label: "Value", value: "1250" },
      { label: "P/L", value: "-850" }
    ]
  }, 
  {
    title: "Kebab Finance",
    stats: [
      { label: "Exposure", value: "2,000" },
      { label: "Value", value: "1250" },
      { label: "P/L", value: "-850" }
    ]
  }
]

export default function Home() {


  return (
    <Layout title = "Home Page">
      <div className = {styles.sampleBody}> 
        { data.map ( entry => <PlatformCard data = {entry} />)}
      </div> 
    </Layout>
  )
}
