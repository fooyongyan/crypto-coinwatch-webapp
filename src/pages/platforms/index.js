import { Grid, Card, Icon, Image, Label, Popup} from 'semantic-ui-react'
import styles from './index.module.css'
import PlatformInfoModal from './__modal';
import Layout from '../../components/Layout/Layout'
import SampleData from './__data';

const PlatformStat = ( {icon, text, tooltip, color}) => {
  return ( 
    <Popup 
      content={tooltip} 
      trigger={<Label color={color}> <Icon name={icon} /> {text}  </Label>}
    />
  )
}
const PlatformCard = ( {data}) => {

  const text = data.description.substring(0, 75) + "...";
  const assets = data.assets;
  const value = `$${data.value.value.toFixed(2)}`;
  const exposure = `$${data.exposure.value.toFixed(2)}`;
  console.log(data);
  return (
    <Card className= {styles.__card} >
      <Image src={data.imgUrl} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{data.name}</Card.Header>
        <Card.Meta>
          <span className='date'>Started in {data.yearStarted}</span>
        </Card.Meta>
        <Card.Description>
          {text}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <PlatformStat tooltip = 'No. of Assets' text = {assets.length} icon = 'monero' color = 'blue'/>
        <PlatformStat tooltip = 'Value' text = {value} icon = 'money' color = 'green'/>
        <PlatformStat tooltip = 'Exposure' text = {exposure} icon = 'money' color = 'red'/>
      </Card.Content>
    <Card.Content extra textAlign = "right">
      <a href = {data.link} target = "_blank">
        <Icon name='linkify' />
      </a>
      <PlatformInfoModal platform = {data}/>
    </Card.Content>
  </Card>
  )
}

const RowOfCards = ( {row, cols} ) => {
  return (
    <Grid.Row columns = {cols} >
          { row.map ( entry => <Grid.Column key = {entry.title}><PlatformCard data = {entry} /> </Grid.Column>)}
    </Grid.Row>
  );
}


export default function Home({platforms}) {
  console.log(platforms[0])
  const data = platforms;
  const configuration = {
    columns: 3
  }

  const map = () => {
    const rowCount = Math.floor(data.length / configuration.columns);
    const rows = [];
    for ( var i = 0; i <= rowCount; i ++ ) {
      const start = i * configuration.columns;
      const end = start + configuration.columns;
      const rowData = data.slice( start, end)
      rows.push(rowData);
    }
    return rows;
  }
  const rows = map();
  return (
    <Layout>
        <div>
          <h1> My Platforms</h1>
        </div> 
        <Grid>  
          <Grid.Row columns = {1} > 
          <Grid.Column> 
            <div> 
              <p> 
                I invest in multiple platforms in the market today, and when I review my investments, I would need to go through all of the platforms to do so.
                My challenge is that I find this tedious and difficult to manage, especially if I need to go through all of the portals one by one. As a result, 
                I created a simple page which allows me to monitor and manage all of my portfolios in one page.
              </p>
              <p>
               The page would pull information from all of the various APIs out there in the Market, and then consolidate and calculate my exposure, current portfolio value, 
               as well as my profit and loss. This way, I would be able to find all of the information, allowing me to manage, handle and build all sorts of information. 
              </p>
            </div>
          </Grid.Column>
          </Grid.Row>
          {rows.map( row => <RowOfCards row = {row} cols = {configuration.columns} /> )}
        </Grid>
    </Layout>
  )
}


export const getStaticProps = async () => {
  console.log('/platforms');
  const response = await fetch ('http://localhost:3001/api/platforms');
  const platforms = await response.json();
  return {
      props: {
          platforms
      }
  }
}
