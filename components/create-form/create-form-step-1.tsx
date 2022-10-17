import React from 'react'
import styles from '../../styles/Pages/create-form-step1.module.css'
import CustomInput from '../../components/CustomInput'
import useFormStore from './formStore'
import useLangStore from '../../utils/store'
import langSt from "../../utils/uiText.json";

const CreateFormStep1 = () => {
	const {
		onTitleChange,
		onDescriptionChange,
	} = useFormStore((state) => ({
		onTitleChange: state.onTitleChange,
		onDescriptionChange: state.onDescriptionChange,
	}))

	const language = useLangStore((state) => state.language)

	const isLangGuj = language === "gj";

	return (
		<div className={styles.create__form__body}>
			<div className={styles.form__element}>
				<div className={styles.form__input__wrapper}>
					<CustomInput
						data={undefined}
						label={isLangGuj?langSt.gj.schemeTitle:langSt.en.schemeTitle}
						placeholder={isLangGuj?langSt.gj.schemeTitlePlaceholder:langSt.en.schemeTitlePlaceholder}
						type={'text'}
						onChange={(e) => onTitleChange(e.target.value)}
					/>
				</div>
				<div className={styles.form__input__wrapper}>
					<CustomInput
						data={undefined}
						label={isLangGuj?langSt.gj.description:langSt.en.description}
						placeholder={isLangGuj?langSt.gj.descriptionPlaceholder:langSt.en.descriptionPlaceholder}
						type={'textarea'}
						onChange={(e) => onDescriptionChange(e.target.value)}
					/>
				</div>
			</div>
		</div>
	)
}

export default CreateFormStep1
