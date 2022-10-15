import React from 'react'
import { Typography, Layout } from 'antd'

const { Title, Text } = Typography
const { Header } = Layout

const AuthHeader = () => {
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
				IYojna
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
				One stop destination for citizens to find and understand all the
				government schemes applicable to them.
			</Text>
		</Header>
	)
}

export default AuthHeader
