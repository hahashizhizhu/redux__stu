import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {Layout} from 'antd';
import {deleteUserInfo} from '../../redux/actions/login_action'
import Header from './header/header'
import './css/admin.less'

const {Footer, Sider, Content } = Layout;

 class Admin extends Component {

	//退出登录的函数
	logout = ()=>{
	  //删除 localStorage中的数据
	  //跳转页面到login
	  this.props.deleteUserInfo()
	}
	render() {
		//判断如果没有登录 不能跳转admin
		if (!this.props.userInfo.isLogin) {
			// 	//强制跳转login
				return <Redirect to = '/login'/>
			}
		return (
			    <Layout className = 'admin'>
				  {/* <h2>hello,  {this.props.userInfo.user.username}</h2> */}
				  {/* <button onClick = {this.logout}>退出登录</button> */}
				
					<Sider>Sider</Sider>
					<Layout>
						<Header/>
						<Content>Content</Content>
						<Footer>Footer</Footer>
					</Layout>
				</Layout>
			
		)
	}
}

export default connect(
	state => ({userInfo:state.userInfo}),
	{deleteUserInfo}
)(Admin)
