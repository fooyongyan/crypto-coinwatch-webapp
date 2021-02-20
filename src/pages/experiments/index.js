import Layout from "../../components/Layout/Layout"
import SimpleCard from '../../components/Card/SimpleCard';
const Page = () => {

    const testData = [
        { value: 300, label: "XXX"},
        { value: 200, label: "YYY"},
        { value: "300M", label: "ZZZ"},
    ]

    return ( 
        <Layout> 
            <div>
                {
                    testData.map ( data => {
                        return ( <SimpleCard value={data.value} label={data.label}/>)
                    })
                }
            </div> 
        </Layout>
    )
}

export default Page;