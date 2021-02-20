import { Button, Header, Modal } from 'semantic-ui-react'
import { Grid, Card, Icon, Image, Container } from 'semantic-ui-react'
import {useState } from 'react'

function ModalPlatformInfo( { platform }) {

    const [open, setOpen] = useState(false)
  
    return (
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<Icon name=' info circle' />}
      >
        <Modal.Header>{platform.title}</Modal.Header>
        <Modal.Content image>
          <Image size='medium' src={platform.imgUrl} wrapped />
          <Modal.Description>
            <Header> About </Header>
            <p>
                {platform.description}
            </p>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color='black' onClick={() => setOpen(false)}>
            Close
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }

  export default ModalPlatformInfo;