//创建action 对象
import {INCREMENT,DECREMENT} from './action_types'

export const increment = (value)=> ({type:INCREMENT,data:value})
export const decrement = (value)=> ({type:DECREMENT,data:value})


export const incrementAsync = (value,time)=> { //分发异步action
	return (dispatch)=>{
		setTimeout(()=>{
			dispatch(increment(value))
		},time)
	}
}