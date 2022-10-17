import React from 'react'

import useFormStore from './formStore'
import CustomInput from '../CustomInput'
import styles from '../../styles/Pages/create-form-step1.module.css'
import useLangStore from '../../utils/store'
import langSt from '../../utils/uiText.json'

const CreateFormStep2 = () => {
	const {
		onMarritalStatusChange,
		onCasteChange,
		onReligionChange,
		onMinAgeChange,
		onMaxAgeChange,
		onEducationChange,
		onOccupationChange,
		onAnnualIncomeMinimumChange,
		onAnnualIncomeMaximumChange,
		onDisabilityChange,
	} = useFormStore((state) => ({
		onMarritalStatusChange: state.onMarritalStatusChange,
		onCasteChange: state.onCasteChange,
		onReligionChange: state.onReligionChange,
		onMinAgeChange: state.onMinAgeChange,
		onMaxAgeChange: state.onMaxAgeChange,
		onEducationChange: state.onEducationChange,
		onOccupationChange: state.onOccupationChange,
		onAnnualIncomeMinimumChange: state.onAnnualIncomeMinimumChange,
		onAnnualIncomeMaximumChange: state.onAnnualIncomeMaximumChange,
		onDisabilityChange: state.onDisabilityChange,
	}))

	const language = useLangStore((state) => state.language)

	const isLangGuj = language === 'gj'

	const marriedStatusDropdown = isLangGuj
		? [
				{
					value: 'એકલુ',
					name: 'એકલુ',
				},
				{
					value: 'લગ્ન કર્યા',
					name: 'લગ્ન કર્યા',
				},
				{
					value: 'લાગુ પડતું નથી',
					name: 'લાગુ પડતું નથી',
				},
		  ]
		: [
				{
					value: 'Single',
					name: 'Single',
				},
				{
					value: 'Married',
					name: 'Married',
				},
				{
					value: 'Not Applicable',
					name: 'Not Applicable',
				},
		  ]

	return (
		<>
			<div className={styles.form__input__wrapper}>
				<CustomInput
					data={marriedStatusDropdown}
					label={isLangGuj ? langSt.gj.maritalStatus : langSt.en.maritalStatus}
					placeholder={
						isLangGuj
							? langSt.gj.maritalStatusPlaceholder
							: langSt.en.maritalStatusPlaceholder
					}
					type={'drop-down'}
					onChange={(e) => {
						onMarritalStatusChange(e)
					}}
				/>
			</div>
			<div className={styles.form__input__wrapper}>
				<CustomInput
					data={undefined}
					label={isLangGuj ? langSt.gj.caste : langSt.en.caste}
					placeholder={
						isLangGuj ? langSt.gj.castePlaceholder : langSt.en.castePlaceholder
					}
					type={'text'}
					onChange={(e) => onCasteChange(e.target.value)}
				/>
			</div>
			<div className={styles.form__input__wrapper}>
				<CustomInput
					data={undefined}
					label={isLangGuj ? langSt.gj.religion : langSt.en.religion}
					placeholder={
						isLangGuj
							? langSt.gj.religionPlaceholder
							: langSt.en.religionPlaceholder
					}
					type={'text'}
					onChange={(e) => onReligionChange(e.target.value)}
				/>
			</div>
			<div className={styles.form__input__wrapper}>
				<CustomInput
					data={undefined}
					label={isLangGuj ? langSt.gj.location : langSt.en.location}
					placeholder={
						isLangGuj
							? langSt.gj.locationPlaceholder
							: langSt.en.locationPlaceholder
					}
					type={'text'}
					onChange={(e) => onReligionChange(e.target.value)}
				/>
			</div>
			<div className={styles.form__input__wrapper}>
				<CustomInput
					data={undefined}
					label={isLangGuj ? langSt.gj.minAge : langSt.en.minAge}
					placeholder={
						isLangGuj
							? langSt.gj.minAgePlaceholder
							: langSt.en.minAgePlaceholder
					}
					type={'text'}
					onChange={(e) => onMinAgeChange(e.target.value)}
				/>
			</div>
			<div className={styles.form__input__wrapper}>
				<CustomInput
					data={undefined}
					label={isLangGuj ? langSt.gj.maxAge : langSt.en.maxAge}
					placeholder={
						isLangGuj
							? langSt.gj.maxAgePlaceholder
							: langSt.en.maxAgePlaceholder
					}
					type={'text'}
					onChange={(e) => onMaxAgeChange(e.target.value)}
				/>
			</div>
			<div className={styles.form__input__wrapper}>
				<CustomInput
					data={undefined}
					label={isLangGuj ? langSt.gj.education : langSt.en.education}
					placeholder={
						isLangGuj
							? langSt.gj.educationPlaceholder
							: langSt.en.educationPlaceholder
					}
					type={'text'}
					onChange={(e) => onEducationChange(e.target.value)}
				/>
			</div>
			<div className={styles.form__input__wrapper}>
				<CustomInput
					data={undefined}
					label={isLangGuj ? langSt.gj.occupation : langSt.en.occupation}
					placeholder={
						isLangGuj
							? langSt.gj.occupationPlaceholder
							: langSt.en.occupationPlaceholder
					}
					type={'text'}
					onChange={(e) => onOccupationChange(e.target.value)}
				/>
			</div>
			<div className={styles.form__input__wrapper}>
				<CustomInput
					data={undefined}
					label={isLangGuj ? langSt.gj.minIncome : langSt.en.minIncome}
					placeholder={
						isLangGuj
							? langSt.gj.minIncomePlaceholder
							: langSt.en.minIncomePlaceholder
					}
					type={'text'}
					onChange={(e) => onAnnualIncomeMinimumChange(e.target.value)}
				/>
			</div>
			<div className={styles.form__input__wrapper}>
				<CustomInput
					data={undefined}
					label={isLangGuj ? langSt.gj.maxIncome : langSt.en.maxIncome}
					placeholder={
						isLangGuj
							? langSt.gj.maxIncomePlaceholder
							: langSt.en.maxIncomePlaceholder
					}
					type={'text'}
					onChange={(e) => onAnnualIncomeMaximumChange(e.target.value)}
					/>
			</div>
			<div className={styles.form__input__wrapper}>
				<CustomInput
					data={undefined}
					label={isLangGuj ? langSt.gj.disability : langSt.gj.disability}
					placeholder={
						isLangGuj
							? langSt.gj.disabilityPlaceholder
							: langSt.gj.disabilityPlaceholder
					}
					type={'text'}
					onChange={(e) => onDisabilityChange(e.target.value)}
				/>
			</div>
		</>
	)
}

export default CreateFormStep2
