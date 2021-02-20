import React from 'react'
import {
  Container,
  Image,
  Menu,
  Segment,
} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import styles from './Layout.module.css'

/**
 * Footer Component
 */
const Footer = () => {
    return (
        <Segment inverted vertical >
        <Container textAlign='center'>
              Powered by React and Next.JS
        </Container>
      </Segment>
    )
}

const PageHeader = () => {
    return (
        <Menu fixed='top' inverted>
        <Container>
            <Menu.Item as='a' href = '/' header>
            <Image size='mini' src='/logo.png' style={{ marginRight: '1.5em' }} />
            </Menu.Item>
            <Menu.Item as='a' href = '/coins'> Coins </Menu.Item>
            <Menu.Item as='a' href = '/platforms'> Platforms </Menu.Item>
        </Container>
        </Menu>
    )
}

const Layout = ({children}) => (
  <div className = {styles.__layout}>
    <PageHeader />
      <Container className={styles.__layout_body}>
        {children}
      </Container>
    <Footer />
  </div>
)

export default Layout