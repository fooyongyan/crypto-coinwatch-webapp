
import Head from 'next/head'
import styles from './Layout.module.css'
const Layout = ({title, children}) => {

    return (
        <div className = {styles.__layout}> 
            <Head>
                <title> {title} </title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div class = {styles.__layout_header}> 
                <h1> My Platform Watcher</h1>
            </div>
            <div class = { styles.__layout_body}> 
                {children}            
            </div>
            <footer className={styles.__layout_footer}>
                Powered by {' '}
                <img src="/coinGecko.png" alt="Vercel Logo" className={styles.__layout_footer_logo} />
            </footer>
        </div>



    )
}

export default Layout;