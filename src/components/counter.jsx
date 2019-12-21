import React, { Component } from 'react'

export default class Counter extends Component {
    //jia
    increment  = ()=>{
        const {select_number} = this.refs
        this.props.increment(select_number.value*1)
    
      }
    
      //jian
      decrement  = ()=>{
        const {select_number} = this.refs
        this.props.increment(select_number.value*1)
      }
    
    
      // 奇数加
      incrementOdd  = ()=>{
        const {select_number} = this.refs
        const {count} = this.props
         if (count%2 === 1) {
         this.props.increment(select_number.value*1)
         }
        
      }
    
      //jibu  yanshi jia
      incrementAsync  = ()=>{
        const {select_number} = this.refs
            this.props.incrementAsync(select_number.value*1,500)
 
      }
    
      render(){
        return (
             <div>
      <span> count is {this.props.count}</span><br/> &nbsp;
                <select ref = 'select_number'>
                  <option value = '1'>1</option>
                  <option value = '2'>2</option>
                  <option value = '3'>3</option>
                  <option value = '4'>4</option>
                </select>&nbsp;
                 <button onClick = {this.increment}>+</button>&nbsp;
                 <button onClick = {this.decrement}>-</button>&nbsp;
                 <button onClick = {this.incrementOdd}>increment if odd</button>&nbsp;
                 <button onClick = {this.incrementAsync}>increment async</button>
             </div>
            
          
        )
      }
}
