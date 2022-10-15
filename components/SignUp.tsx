import { Button, Form, Input, Radio } from 'antd'
import React from 'react'

import { UserOutlined, LockOutlined } from '@ant-design/icons'
import langSt from "../utils/uiText.json";
import useLangStore from '../utils/store';
const SignUp = () => {
	const [form] = Form.useForm()

	const onFinish = (values: any) => {
		console.log(values)
	}

	const onReset = () => {
		form.resetFields()
	}

	const language = useLangStore((state) => state.language)

	return (
		<Form form={form} name="control-hooks" onFinish={onFinish}>
			<Form.Item name={language === "gj" ? langSt.gj.email : langSt.en.email} rules={[{ required: true }]}>
				<Input
					size="large"
					placeholder={language === "gj" ? langSt.gj.email : langSt.en.email}
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
			<Form.Item name={language === "gj" ? langSt.gj.password : langSt.en.password} rules={[{ required: true }]}>
				<Input.Password
					size="large"
					placeholder={language === "gj" ? langSt.gj.passPlaceholder : langSt.en.passPlaceholder}
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
			<Form.Item name={language === "gj" ? langSt.gj.confirmPassword : langSt.en.confirmPassword} rules={[{ required: true }]}>
				<Input.Password
					size="large"
					placeholder={language === "gj" ? langSt.gj.confirmPassword : langSt.en.confirmPassword}
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
					{language === "gj" ? langSt.gj.signUp : langSt.en.signUp}
				</Button>
				<Button
					htmlType="button"
					onClick={onReset}
					style={{ width: '6vw', marginTop: '0.8rem', borderRadius: '5px' }}
				>
					{language === "gj" ? langSt.gj.reset : langSt.en.reset}
				</Button>
			</Form.Item>
		</Form>
	)
}

export default SignUp
