import React from 'react';
import './Person.css';
const person = (props) => {
    //props.children 标签中的值
    return <div className="person">
               <p onClick={props.myclick}> hello, {props.name} ,index {props.count}, say {props.children} </p>
               <input type="text" onChange={props.changed} defaultValue={props.name}/>
           </div>
}

export default person