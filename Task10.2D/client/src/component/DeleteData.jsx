import React from "react";
import { useRouteMatch, useHistory } from "react-router-dom";
import InputExample from './Input'

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
                  <h1>Note!</h1>
                  <h3>you will delete a task that has been posted to a task list make sure you have been given permission to do this and all deleted tasks will not be restored.</h3>
                  <h4>Please input ID and password of the task publisher</h4>
                  </div>
                  <div>
                      <InputExample labelid='usernamelable' type='text' classname='username' text='username'/>
                      <InputExample labelid='passwordlable' type='text' classname='password' text='password'/>
                  </div>
              <div className='DeleteButton'>
              <button type="submit" onClick={DeleteItem} className="ui button" id='delete'>Delete</button>
              <button type="submit" onClick={BacktoList} className="ui button" id='back'>Back</button>
              </div>
          </div>
      )
    
}

export default DeleteData