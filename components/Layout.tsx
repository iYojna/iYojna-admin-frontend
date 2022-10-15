import React, { useState } from 'react'
import { useRouter } from 'next/router'
import {
	HomeOutlined,
	FormOutlined,
	LaptopOutlined,
	NotificationOutlined,
	UserOutlined,
} from '@ant-design/icons'
import { Layout, Menu } from 'antd'
const { Content, Sider } = Layout
import styles from '../styles/Components/Layout.module.css'
import CustomHeader from '../components/Header'
import langSt from "../utils/uiText.json";
import useLangStore from '../utils/store'

interface IProps {
	children: React.ReactNode
}

const CustomLayout = ({ children }: IProps) => {
	const router = useRouter()
	const [collapsed, setCollapsed] = useState(false)
	
	const language = useLangStore((state) => state.language);

	const navItems = React.useMemo(
		() => [
			{
				key: 0,
				icon: React.createElement(UserOutlined),
				label: 'Login/Signup',
				onClick: () => router.push('/auth'),
			},
			{
				key: 1,
				icon: React.createElement(HomeOutlined),
				label: 'Dashboard',
				onClick: () => router.push('/dashboard'),
			},
			{
				key: 2,
				icon: React.createElement(FormOutlined),
				label: 'Schemes',
				children: [
					{
						key: 0,
						label: 'Add Scheme',
						onClick: () => router.push('/schemes/create'),
					},
					{
						key: 1,
						label: 'All Schemes',
						onClick: () => router.push('/schemes'),
					},
				],
			},
		],
		[router]
	)
	return (
		<Layout style={{ height: '100vh', overflowY: 'clip' }}>
			<Layout>
				<Sider
					width={230}
					className={styles.custom__style}
					collapsible
					collapsed={collapsed}
					onCollapse={(value) => setCollapsed(value)}
				>
					<div
						style={{
							height: '20%',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							backgroundColor: 'white',
						}}
					>
						<p className={styles.side__panel__title}>
							{collapsed ? 'iY' : language === "gj" ? langSt.gj.iYojna : langSt.en.iYojna}
						</p>
					</div>

					<Menu
						mode="inline"
						defaultOpenKeys={['sub1']}
						style={{
							height: '100%',
							borderRight: 0,
						}}
						items={navItems}
					/>
				</Sider>
				<Layout
					style={{
						padding: '0 24px 24px',
					}}
				>
					<CustomHeader />
					<Content className={styles.custom__content}>{children}</Content>
				</Layout>
			</Layout>
		</Layout>
	)
}

export default CustomLayout
