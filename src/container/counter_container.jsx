//引入ui组件
import Counter from '../components/counter'
import {increment,decrement,incrementAsync} from '../redux/action_creators'

//引入connect
import {connect} from 'react-redux'


// const mapReduxStateToProps = state=>({count:state})

// const mapReduxMethodToProps = dispatch=>({
//     increment:value=> dispatch(increment(value)),
//     decrement:value=> dispatch(decrement(value))
// })

// export default connect(mapReduxStateToProps,mapReduxMethodToProps)(Counter)


export default connect(
	state => ({count:state}), //映射状态为props
	{increment,decrement,incrementAsync} //映射dispatch为props
)(Counter)