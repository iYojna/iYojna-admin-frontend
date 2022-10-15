import React from 'react'
import styles from '../styles/Components/CustomHeader.module.css'
import {
	BellOutlined,
	MessageOutlined,
	DownOutlined,
	UserOutlined,
} from '@ant-design/icons'
import { Dropdown, Menu as AntDMenu, Space } from 'antd'
import { useRouter } from 'next/router'

const LanguageMenu = () => {
	return (
		<AntDMenu>
			<AntDMenu.Item>English</AntDMenu.Item>
			<AntDMenu.Item>ગુજરાતી</AntDMenu.Item>
		</AntDMenu>
	)
}

const Menu = () => {
	const router = useRouter()
	return (
		<AntDMenu
			items={[
				{
					label: 'Schemes',
					key: 0,
					onClick: () => router.push('/schemes'),
				},
				{
					type: 'divider',
				},
				{
					label: 'Logout',
					key: 3,
				},
			]}
		/>
	)
}

const CustomHeader = () => {
	return (
		<div className={styles.custom__header__wrapper}>
			<div className={styles.custom__part__2}>
				<div className={styles.admin__dropdown}>
					<div className={styles.admin__photo}>
						<UserOutlined className={styles.header__icon__style} />
					</div>
					<Dropdown
						overlay={<Menu />}
						trigger={['click']}
						className={styles.custom__dropdown}
					>
						<a onClick={(e) => e.preventDefault()}>
							<Space>
								Dhruv Dave
								<DownOutlined />
							</Space>
						</a>
					</Dropdown>
					<Dropdown
						overlay={<LanguageMenu />}
						trigger={['click']}
						className={styles.custom__dropdown}
					>
						<a onClick={(e) => e.preventDefault()}>
							<Space>
								Language
								<DownOutlined />
							</Space>
						</a>
					</Dropdown>
				</div>
			</div>
		</div>
	)
}

export default CustomHeader
