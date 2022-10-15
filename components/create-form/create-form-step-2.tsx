import React from 'react'

import useFormStore from './formStore'
import CustomInput from '../CustomInput'
import styles from '../../styles/Pages/create-form-step1.module.css'

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

	const marriedStatusDropdown = [
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
					label={'Marital Status'}
					placeholder={'Select Marital Status'}
					type={'drop-down'}
					onChange={(e) => {
						onMarritalStatusChange(e)
					}}
				/>
			</div>
			<div className={styles.form__input__wrapper}>
				<CustomInput
					data={undefined}
					label={'Caste'}
					placeholder={'Enter Allowed Castes(if any)'}
					type={'text'}
					onChange={(e) => onCasteChange(e.target.value)}
				/>
			</div>
			<div className={styles.form__input__wrapper}>
				<CustomInput
					data={undefined}
					label={'Religion'}
					placeholder={'Enter Allowed Religions(if any)'}
					type={'text'}
					onChange={(e) => onReligionChange(e.target.value)}
				/>
			</div>
			<div className={styles.form__input__wrapper}>
				<CustomInput
					data={undefined}
					label={'Location'}
					placeholder={'Enter Allowed Locations(if any)'}
					type={'text'}
					onChange={(e) => onReligionChange(e.target.value)}
				/>
			</div>
			<div className={styles.form__input__wrapper}>
				<CustomInput
					data={undefined}
					label={'Minimum Age'}
					placeholder={'Enter Minimum Age(if any)'}
					type={'text'}
					onChange={(e) => onMinAgeChange(e.target.value)}
				/>
			</div>
			<div className={styles.form__input__wrapper}>
				<CustomInput
					data={undefined}
					label={'Maximum Age'}
					placeholder={'Enter Maximum Age(if any)'}
					type={'text'}
					onChange={(e) => onMaxAgeChange(e.target.value)}
				/>
			</div>
			<div className={styles.form__input__wrapper}>
				<CustomInput
					data={undefined}
					label={'Education'}
					placeholder={'Enter Educational Qualification(if any)'}
					type={'text'}
					onChange={(e) => onEducationChange(e.target.value)}
				/>
			</div>
			<div className={styles.form__input__wrapper}>
				<CustomInput
					data={undefined}
					label={'Occupation'}
					placeholder={'Enter Allowed Occupations(if any)'}
					type={'text'}
					onChange={(e) => onOccupationChange(e.target.value)}
				/>
			</div>
			<div className={styles.form__input__wrapper}>
				<CustomInput
					data={undefined}
					label={'Minimum Annual Income'}
					placeholder={'Enter Minimum Annual Income(if any)'}
					type={'text'}
					onChange={(e) => onAnnualIncomeMinimumChange(e.target.value)}
				/>
			</div>
			<div className={styles.form__input__wrapper}>
				<CustomInput
					data={undefined}
					label={'Maximum Annual Income'}
					placeholder={'Enter Maximum Annual Income(if any)'}
					type={'text'}
					onChange={(e) => onAnnualIncomeMaximumChange(e.target.value)}
				/>
			</div>
			<div className={styles.form__input__wrapper}>
				<CustomInput
					data={undefined}
					label={'Disability'}
					placeholder={'Enter Disabilities(if any)'}
					type={'text'}
					onChange={(e) => onDisabilityChange(e.target.value)}
				/>
			</div>
		</>
	)
}

export default CreateFormStep2
