import React from 'react';
import Alert from 'react-bootstrap/Alert'

import '../css/SettingTask.css'



const SettingTask = () =>{
    return(
        <div>
        <div className='title3'>
            <h2>Setting up your Task</h2>
        </div>
        <Alert variant="danger">
        <Alert.Heading>! No Type !</Alert.Heading>
        <p>
            You have not choose one task type, please choose one type and then set the task
        </p>
      </Alert>
        </div>
    )
}

export default SettingTask