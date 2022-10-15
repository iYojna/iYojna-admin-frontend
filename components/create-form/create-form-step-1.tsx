import React from 'react'
import styles from '../../styles/Pages/create-form-step1.module.css'
import CustomInput from '../../components/CustomInput'
import useFormStore from './formStore'

const CreateFormStep1 = () => {
	const {
		onTitleChange,
		onDescriptionChange,
	} = useFormStore((state) => ({
		onTitleChange: state.onTitleChange,
		onDescriptionChange: state.onDescriptionChange,
	}))

	return (
		<div className={styles.create__form__body}>
			<div className={styles.form__element}>
				<div className={styles.form__input__wrapper}>
					<CustomInput
						data={undefined}
						label={'Scheme Title'}
						placeholder={'Enter the Scheme Name'}
						type={'text'}
						onChange={(e) => onTitleChange(e.target.value)}
					/>
				</div>
				<div className={styles.form__input__wrapper}>
					<CustomInput
						data={undefined}
						label={'Description'}
						placeholder={'Write your instructions here'}
						type={'textarea'}
						onChange={(e) => onDescriptionChange(e.target.value)}
					/>
				</div>
			</div>
		</div>
	)
}

export default CreateFormStep1
