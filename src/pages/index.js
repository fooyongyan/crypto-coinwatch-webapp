import Layout from '../components/Layout/Layout'
import {Container, Grid, Image, Segment, Header, Divider, List, Label } from 'semantic-ui-react';
import styles from './index.module.css'

function AboutMe ( ) {

  const skills = ["NodeJS", "Java", "C#", "HTML", "CSS", "C++", "React"]
  const tools = ["Office365", "Sharepoint", "Lucid-Chart", "Jira", "ZenDesk"]
  return (
    <div> 
      <Image src='/profile.png' size='medium' circular centered/>
      <Segment >
      <Header as='h3' floated='right'>
        About me
      </Header>
      <Divider clearing />
      <p>
      I believe that coding and software
      development is a key enabler towards
      materializing a finer product and
      solution for my customers.
      </p>
      <p>
        Having been in the IT Industry since 2004, my
        experience spreads across
        Development, Solutioning,
        Project/Product Management and
        Business Development.
      </p>
      <p>
        I see myself as a problem-fixer towards
        different aspects of a project
        development team.
        What excites me is to work and learn
        with talented people and build
        greenfield solutions for a cause and
        purpose for my Customers and
        Partners. 
      </p>
    </Segment>
    <Segment >
      <Header as='h3' floated='right'>
        Skill Sets
      </Header>
      <Divider clearing />
      <div className = {styles.__tags}>
        {skills.map ( skill =>  <Label key = {skill} as='a' image> {skill} </Label>)}
      </div>
    </Segment>
    <Segment >
      <Header as='h3' floated='right'>
        Software Tools
      </Header>
      <Divider clearing />
      <div className = {styles.__tags}>
        {tools.map ( tool =>  <Label  key = {tool} as='a' image> {tool} </Label>)}
      </div>
    </Segment>
  </div>
  )
}

function Position ( {position} ) {
  return (
    <Segment >
      <Header as='h3' floated='right'>
        {position.company} 
      </Header>
      <Divider clearing />
      <Header as='h5'> {position.position} </Header> 
      <p> {position.period} </p>
      <List as='ul'>
        {position.points.map ( pt => <List.Item key = {pt} as='li'> {pt}</List.Item>)}
      </List>
    </Segment>
  )
}

function WorkExperience () {
  const positions = [
    { 
      company : "Hendricks Corp ", 
      position: "Head of Applications Development", 
      period: "Jun/2014 to Feb/2021", 
      points: [ 
        "Oversees Project and Product Development on VA Solutions",
        "Solution Architecture Framework Design focusing on CCTV Solutioning, VA Integration, Data Analytics & Workflow Notification External Systems Integration and Application Security and Practices",
        "Business Development for Public & Private Customers", 
        "Managing Strategic Partners, Suppliers and Solutioning for Product Development, Tender Submissions, and Solution Delivery",
        "Incorporating Tools to facilitate and ease of delivery processes like Software Testing, CI/CD and Maintenance", 
        "Accounts Portfolio covers Asia Pacific Region, mainly in Singapore, Hong Kong, Malaysia, Australia"
      ]
    },
    { 
      company : "Urban Digital Technologies", 
      position: "Business/IT Manager", 
      period: "Mar/2011 to Jun/2014",
      points: [
        "Integrating 3D GIS Solutions, specializing in 3D-Mapping, BIM and City Simulations", 
        "Business Development & Solution Designs for Customers, mainly for Urban Planning Customers in Singapore, Taiwan and China.",
        "Streamline Project Delivery Pipeline between Development & Production Teams based in China, Taiwan & Singapore", 
        "Business Development for Greenfield Projects for Public & Private Sectors", 
        "Product Evaluation for GIS Solutions and IoT Sensors from other countries.",
        "Key Developer contributing in War Simulation, GIS Mapping and Software Products by the Company, mainly in C++, .NET, Java and MQ"
      ]
    },
    { 
      company : "S2T Pte Ltd", 
      position: "Senior Software Engineer / Team Lead", 
      period: "Dec/2005 to Jun/2011", 
      points: [
        "Key Developer contributing in War Simulation, GIS Mapping and Software Products by the Company, mainly in C++, .NET, Java and MQ",
        "Led a Team of 8 Developers in the development in the NextGeneration Army War Simulation Systems for MINDEF"
      ]
    }
  ]


  return (
    <div>
      <div>
        { positions.map ( position => <Position key = {position.company} position = {position} />)}
      </div> 
    </div> 
  )
}

function BodyLayout () {
  return (
    <div>
      <Grid columns={1} >
        <Grid.Column >
        </Grid.Column>
      </Grid>
      <Grid columns={3} divided>
        <Grid.Row>
          <Grid.Column width = {6}>
            <AboutMe />
          </Grid.Column>
          <Grid.Column width = {10}>
            <WorkExperience />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      
    </div>
    
    
  )
} 


export default function Home() {
  return (
    <Layout>
      <Container as="div"> 
          <BodyLayout />
      </Container>
    </Layout>
  )
}
