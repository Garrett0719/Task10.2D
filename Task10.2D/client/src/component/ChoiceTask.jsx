import React from 'react';
import InputExample from './Input'
import '../css/ChoiceTask.css'

const ChoiceTask = (props) => {
    return(
    <div>
        <div className='title3'>
            <h2>Setting up your Task</h2>
        </div>
        <div className='SetChoice'>
        <h3>Please set up your task question and options</h3>
            <InputExample  classname='option' text='Please set up your task question' type='text' name='TaskQuestion' onChange={props.ChoiceTask}/>
            <InputExample labelid = 'one' classname='option' text='Option one' type='text' name='OptionOne' onChange={props.OptionOne}/>
            <InputExample labelid = 'two' classname='option' text='Option Two' type='text'  name='OptionTwo' onChange={props.OptionTwo}/>
            <InputExample labelid = 'three' classname='option' text='Option three' type='text'  name='OptionThree' onChange={props.OptionThree}/>
        </div>
        </div>
    )
}

export default ChoiceTask