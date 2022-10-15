import { Button, Form, Input, Radio } from 'antd'
import React from 'react'

import { UserOutlined, LockOutlined } from '@ant-design/icons'

const SignUp = () => {
	const [form] = Form.useForm()

	const onFinish = (values: any) => {
		console.log(values)
	}

	const onReset = () => {
		form.resetFields()
	}

	return (
		<Form form={form} name="control-hooks" onFinish={onFinish}>
			<Form.Item name="email" rules={[{ required: true }]}>
				<Input
					size="large"
					placeholder="Email"
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
			<Form.Item name="password" rules={[{ required: true }]}>
				<Input.Password
					size="large"
					placeholder="Password (6 characters atleast, case sensitive)"
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
			<Form.Item name="confirm-password" rules={[{ required: true }]}>
				<Input.Password
					size="large"
					placeholder="Confirm password"
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
					}}
				>
					Sign Up
				</Button>
				<Button
					htmlType="button"
					onClick={onReset}
					style={{ width: '6vw', marginTop: '0.8rem', borderRadius: '5px' }}
				>
					Reset
				</Button>
			</Form.Item>
		</Form>
	)
}

export default SignUp
