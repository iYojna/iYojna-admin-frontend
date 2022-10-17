import React from 'react'
import { DatePicker, Input, Select } from 'antd'
import styles from '../styles/Components/CustomInput.module.css'
import useLangStore from '../utils/store'

const { Option } = Select
const { TextArea } = Input

interface IProps {
	placeholder: string | undefined
	type: string
	data: any
	label: string
	onChange: any
}

const CustomInput = ({ placeholder, type, data, label, onChange }: IProps) => {
	const language = useLangStore((state) => state.language)

	const isLangGuj = language === 'gj'

	return (
		<div className={styles.input__wrapper}>
			<label className={styles.input__label}>{label}</label>
			<div className={styles.input__element}>
				{type === 'text' ? (
					<Input
						placeholder={placeholder}
						className={styles.input__element__comp}
						onChange={onChange}
						/>
						) : null}
				{type === 'date' ? (
					<DatePicker
					className={styles.input__element__comp}
					onChange={onChange}
					/>
					) : null}
				{type === 'drop-down' ? (
					<Select
						// defaultValue={isLangGuj ? "પસંદ કરો" : "Select"}
						defaultActiveFirstOption={true}
						className={styles.input__element__dropdown}
						onChange={onChange}
					>
						{data.map((item: any) => (
							<Option key={item.value} value={item.value}>
								{item.name}
							</Option>
						))}
					</Select>
				) : null}
				{type === 'textarea' ? (
					<TextArea
						rows={4}
						className={styles.input__element__comp}
						onChange={onChange}
					/>
				) : null}
			</div>
		</div>
	)
}

export default CustomInput
