import { Button, Form, Input, Select } from 'antd'
import React from 'react'

import { UserOutlined, LockOutlined } from '@ant-design/icons'

const { Option } = Select
import useLangStore from '../utils/store'
import langSt from '../utils/uiText.json'
// const layout = {
// 	labelCol: { span: 8 },
// 	wrapperCol: { span: 16 },
// }
// const tailLayout = {
// 	wrapperCol: { offset: 8, span: 16 },
// }

const Login = () => {
	const [form] = Form.useForm()
	const language = useLangStore((state) => state.language)
	// console.log("LANG: ", language);
	const onFinish = (values: any) => {
		console.log(values)
	}

	const onReset = () => {
		form.resetFields()
	}

	return (
		<Form form={form} name="control-hooks" onFinish={onFinish}>
			<Form.Item
				name={language === 'gj' ? langSt.gj.email : langSt.en.email}
				rules={[{ required: true }]}
			>
				<Input
					size="large"
					placeholder={language === 'gj' ? langSt.gj.email : langSt.en.email}
					style={{ marginTop: '4%' }}
					prefix={
						<UserOutlined
							style={{
								marginRight: '5px',
								color: '#2697ff',
							}}
						/>
					}
				/>
			</Form.Item>
			<Form.Item
				name={language === 'gj' ? langSt.gj.password : langSt.en.password}
				rules={[{ required: true }]}
			>
				<Input.Password
					size="large"
					placeholder={
						language === 'gj' ? langSt.gj.password : langSt.en.password
					}
					prefix={
						<LockOutlined
							style={{
								marginRight: '5px',
								color: '#2697ff',
							}}
						/>
					}
				/>
			</Form.Item>
			<Form.Item>
				<Button
					type="primary"
					htmlType="submit"
					style={{
						width: '6vw',
						marginRight: '3%',
						marginTop: '0.8rem',
						borderRadius: '5px',
						backgroundColor: 'rgb(1, 107, 1)',
					}}
				>
					{language === 'gj' ? langSt.gj.login : langSt.en.login}
				</Button>
				<Button
					type="primary"
					htmlType="button"
					onClick={onReset}
					style={{
						width: '6vw',
						marginTop: '0.8rem',
						borderRadius: '5px',
						backgroundColor: 'rgb(1, 107, 1)',
					}}
				>
					{language === 'gj' ? langSt.gj.reset : langSt.en.reset}
				</Button>
			</Form.Item>
		</Form>
	)
}

export default Login
