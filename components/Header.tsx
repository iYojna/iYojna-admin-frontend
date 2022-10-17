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
import useLangStore from '../utils/store'
import langSt from '../utils/uiText.json'

const LanguageMenu = () => {
	const setLanguage = useLangStore((state) => state.setLanguage);
	

	return (
		<AntDMenu onClick={(val) => {
			val.key === "tmp_key-0" ? setLanguage("en") : setLanguage("gj");
		}}>
			<AntDMenu.Item>English</AntDMenu.Item>
			<AntDMenu.Item>ગુજરાતી</AntDMenu.Item>
		</AntDMenu>
	)
}

const Menu = () => {
	const router = useRouter();
	

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
	const language = useLangStore((state) => state.language);
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
								{language === "gj" ? langSt.gj.name : langSt.en.name}
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
								{language === "gj" ? langSt.gj.language : langSt.en.language}
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
