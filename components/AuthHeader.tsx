import React from 'react'
import { Typography, Layout } from 'antd'

const { Title, Text } = Typography
const { Header } = Layout
import useLangStore from '../utils/store'
import langSt from "../utils/uiText.json";

const AuthHeader = () => {

	const language = useLangStore((state) => state.language)
	return (
		<Header
			style={{
				background: 'none',
				height: 'fit-content',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				marginTop: '5%',
			}}
		>
			<Title
				style={{
					fontFamily: 'Poppins',
					fontSize: '2.1rem',
					fontWeight: 900,
					letterSpacing: '0.005em',
					color: '#000000D9',
				}}
			>
				{language === "gj" ? langSt.gj.iYojna : langSt.en.iYojna}
			</Title>	
			<Text
				style={{
					fontFamily: 'Roboto',
					fontSize: '1rem',
					fontWeight: 400,
					lineHeight: '22px',
					letterSpacing: '0em',
					color: '#00000073',
					width: '30vw',
					textAlign: 'center',
				}}
			>
				{language === "gj" ? langSt.gj.introText : langSt.en.introText}
			</Text>
		</Header>
	)
}

export default AuthHeader
