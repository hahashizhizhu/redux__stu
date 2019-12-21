import React,{Component} from 'react'

import CounterContainer from './container/counter_container'



export default class App extends Component{
   render(){
    return (
      <div>
        <h1>Counter 组件 </h1>
          <CounterContainer/>
      </div>
        
    )
  }
}