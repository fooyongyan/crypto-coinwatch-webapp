import { Button, Header, Modal, Table  } from 'semantic-ui-react'
import { Divider, Icon, Image } from 'semantic-ui-react'
import {useState } from 'react'

function DividedContent ( { title, icon, children }) {
  return (
      <div> 
        <Divider horizontal>
              <Header as='h4'>
                <Icon name={icon} /> 
                {title}
              </Header>
        </Divider>
        {children}
      </div>
  )
}
function AssetsTable ( {assets }) {
  console.log( assets);
  return (
    <div>
      <Table definition>
              <Table.Body>
                {assets.sort().map ( asset => {
                  return (
                    <Table.Row>
                      <Table.Cell>{asset.assetId}</Table.Cell>
                      <Table.Cell>${asset.value.value.toFixed(2)} @ ${asset.unitPrice.value.toFixed(2)}</Table.Cell>
                    </Table.Row>
                  )
                })}
              </Table.Body>
            </Table>
    </div>
  ) 
}
function ModalPlatformInfo( { platform }) {

    const [open, setOpen] = useState(false)
    return (
      <Modal
        dimmer = {undefined}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<Icon name=' info circle' />}
      >
        <Modal.Header>{platform.name}</Modal.Header>
        <Modal.Content image scrolling>
          <Image size='medium' src={platform.imgUrl} wrapped />
          <Modal.Description>
            <DividedContent title = "Description" icon = "sticky note">  
              <p> {platform.description }</p>
            </DividedContent> 
            <DividedContent title = "Assets" icon = "tag">  
              <p> The Asset(s) invested in the Platform are:</p>
              <AssetsTable assets = {platform.assets} />
            </DividedContent> 
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