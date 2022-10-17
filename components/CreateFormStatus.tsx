import React from 'react'
import styles from '../styles/Components/create-form-status.module.css'
import useLangStore from '../utils/store'
import langSt from '../utils/uiText.json'

type CreateFormStatusType = {
	currentStep: number
}

const CreateFormStatus = ({ currentStep }: CreateFormStatusType) => {
	const language = useLangStore((state) => state.language)
	const isLangGuj = language === 'gj'

	return (
		<div className={styles.create__form__status__wrapper}>
			<div className={styles.part__1}>
				<div className={styles.status__wrapper}>
					<div
						className={
							currentStep === 1
								? styles.status__circle
								: styles.status__circle__not
						}
					/>
				</div>
				<div className={styles.status__line} />
				<div className={styles.status__wrapper}>
					<div
						className={
							currentStep === 2
								? styles.status__circle
								: styles.status__circle__not
						}
					/>
				</div>
			</div>
			<div className={styles.part__2}>
				<div className={styles.title__wrapper}>
					<p
						className={styles.status__title}
						style={{
							color: `rgba(0,0,0,${currentStep === 1 ? '0.85' : '0.45'})`,
						}}
					>
						{isLangGuj ? langSt.gj.schemeDetails : langSt.en.schemeDetails}
					</p>
				</div>
				<div className={styles.title__wrapper}>
					<p
						className={styles.status__title__notdone}
						style={{
							color: `rgba(0,0,0,${currentStep === 2 ? '0.85' : '0.45'})`,
						}}
					>
						{isLangGuj
							? langSt.gj.schemeEligibility
							: langSt.en.schemeEligibility}
					</p>
				</div>
			</div>
		</div>
	)
}

export default CreateFormStatus
