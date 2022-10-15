import React from 'react'
import AuthHeader from '../components/AuthHeader'

import { Typography } from 'antd'
import { Tabs } from 'antd'
import Login from '../components/Login'
import SignUp from '../components/SignUp'

// const { Content } = Layout
const { Title } = Typography
const { TabPane } = Tabs
import useLangStore from '../utils/store'
import langSt from "../utils/uiText.json";

import CustomLayout from '../components/Layout'
const onChange = (key: string) => {
	console.log(key)
}

const Auth = () => {
	const language = useLangStore((state) => state.language)
	const tab1 = language === "gj" ? langSt.gj.login : langSt.en.login
	const tab2 = language === "gj" ? langSt.gj.signUp : langSt.en.signUp

	return (
		<div>
			<AuthHeader />
			<Tabs
				size="large"
				defaultActiveKey="1"
				onChange={onChange}
				style={{ width: '30vw', margin: '2% auto 10% auto' }}
			>
				<TabPane tab={tab1} key="1">
					<Login />
				</TabPane>
				<TabPane tab={tab2} key="2">
					<SignUp />
				</TabPane>
			</Tabs>
		</div>
	)
}

export default Auth
