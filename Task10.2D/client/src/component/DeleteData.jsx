import React from "react";
import { useRouteMatch, useHistory } from "react-router-dom";
import Alert from 'react-bootstrap/Alert'
import '../css/DeleteTask.css'
import {  Header, Icon } from 'semantic-ui-react'
import InputExample from './Input'
import Footerbar from './Footerbar'


const DeleteData = () =>{

    const match = useRouteMatch()
    const history = useHistory()

      const DeleteItem = () =>{
        
        fetch( 'http://localhost:8000/deleteItem/'+ match.params.id,{
            method: 'DELETE',
            header:{'Accept':'application/json',
           'Content-Type':'application/json'}
        })
        history.push("/WorkerTask")
      }

      const BacktoList = () => {
        history.push("/WorkerTask")
      }

      return(
          <div>
              <div className='DeleteTitle'>
              <Alert variant="danger" dismissible>
              <Header icon>
        <Icon name='exclamation triangle' color='yellow'/>
      </Header>
        <Alert.Heading>! Attention !</Alert.Heading>
        <p>
        You are about to delete a published task, please make sure you have the right to do so. Deleted data will not be recovered in any way.
        </p>
      </Alert>
                  </div>
                  <div className="Deleteform">
                    <p>Please input user name and password of the task publisher</p>
                  <div>
                      <InputExample labelid='usernamelable' type='text' classname='username' text='username' inputid='user'/>
                      <InputExample labelid='passwordlable' type='text' classname='password' text='password' inputid='pwd'/>
                  </div>
              <div className='DeleteButton'>
              <button type="submit" onClick={DeleteItem} className="ui button" id='delete'>Delete</button>
              <button type="submit" onClick={BacktoList} className="ui button" id='back'>Back</button>
              </div>
              </div>
              <div className='footer'>
              <Footerbar/>
              </div>
          </div>
      )
    
}

export default DeleteData