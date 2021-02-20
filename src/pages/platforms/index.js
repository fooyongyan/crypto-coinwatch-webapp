import { Grid, Card, Icon, Image } from 'semantic-ui-react'
import data from './__data'
import styles from './index.module.css'
import PlatformInfoModal from './__modal';
import Layout from '../../components/Layout/Layout'
const PlatformCard = ( {data}) => {

  const text = data.description.substring(0, 75) + "...";

  return (
    <Card className= {styles.__card}>
    <Image src={data.imgUrl} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{data.title}</Card.Header>
      <Card.Meta>
        <span className='date'>Started in {data.yearStarted}</span>
      </Card.Meta>
      <Card.Description>
        {text}
      </Card.Description>
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


export default function Home() {

  const configuration = {
    columns: 4
  }

  const map = () => {
    const rowCount = Math.floor(data.length / configuration.columns);
    const rows = [];
    for ( var i = 0; i <= rowCount; i ++ ) {
      const start = i * configuration.columns;
      const end = start + configuration.columns;
      const rowData = data.slice( start, end)
      console.log( start, end, data.length, rowData);
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
          {rows.map( row => {
            return <RowOfCards row = {row} cols = {configuration.columns} />
          })}
        </Grid>
    </Layout>
  )
}
