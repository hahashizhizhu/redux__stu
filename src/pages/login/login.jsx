import React, { Component } from 'react'
import { Form, Icon, Input, Button} from 'antd';
import logo from './images/logo.png'
import './css/login.less'
const {Item} = Form

class Login extends Component {

	//响应表单的提交
	handleSubmit = (event)=>{
		event.preventDefault()
		this.props.form.validateFields((err, values) => {
		
      if (!err) {
        console.log('发送请求', values);
			}
    });
	}

	//密码验证
	pwdValidator = (rule, value, callback)=>{
		if(!value){
			callback('密码必须输入')
		}else if(value.length < 4){
			callback('密码必须大于等于4位')
		}else if(value.length > 12){
			callback('密码必须小于等于12位')
		}else if(!(/^\w+$/).test(value)){
			callback('密码必须是英文、数字或下划线组成')
		}
		callback()
	}

	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<div id="login">
				<div className="header">
					<img src={logo} alt="logo"/>
					<h1>商品管理系统</h1>
				</div>
				<div className="content">
					<h1>用户登录</h1>
					<Form onSubmit={this.handleSubmit} className="login-form">
						<Item>
						
							{getFieldDecorator('username', {
								rules: [
									{required: true, message: '用户名必须输入'}, 
									{min: 4, message: '用户名必须大于等于4位'}, 
									{max: 12, message: '用户名必须小于等于12位'}, 
									{pattern: /^\w+$/, message: '用户名必须是英文、数字或下划线组成'}, 
								],
							})(
								<Input
									prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
									placeholder="用户名"
								/>
							)}
						</Item>
						<Item>
							{getFieldDecorator('password', {
									rules: [
										{validator:this.pwdValidator}, 
									],
								})(
									<Input
										prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
										type="password"
										placeholder="密码"
									/>
								)}
						</Item>
						<Item>
							<Button type="primary" htmlType="submit" className="login-form-button">
								登录
							</Button>
						</Item>
					</Form>
				</div>
			</div>
		)
	}
}


export default Form.create()(Login);
