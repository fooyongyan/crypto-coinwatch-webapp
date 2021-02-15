import Layout from "../../components/Layout/Layout";
import { useRouter } from "next/router";


const Details = ({price}) => {

    const router = useRouter();
    const { id } = router.query; // Destructuring our router object
  
    return (
        <Layout> 
            {id} { price[id].usd}
        </Layout>
    )
}

export async function getServerSideProps( context ) {
    const id = (context.query.id);
    
    const res = await fetch ( `https://api.coingecko.com/api/v3/simple/price?ids=${id}&vs_currencies=usd`)
    const price = await res.json();
    console.log(price);
    return {
        props: {
            price
        }
    }
}

export default Details;