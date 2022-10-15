import create from 'zustand'

const useFormStore = create((set) => ({
	title: '',
	description: '',
	marritalStatus: '',
	caste: '',
	religion: '',
	location: '',
	minAge: '',
	maxAge: '',
	education: '',
	occupation: '',
	annualIncomeMinimum: '',
	annualIncomeMaximum: '',
	disability: '',

	selectedCheckboxOptions: [],

	formId: 0,

	onTitleChange: (newTitle) => set(() => ({ title: newTitle })),
	onMarritalStatusChange: (newStatus) =>
		set(() => ({ marritalStatus: newStatus })),
	onCasteChange: (newCaste) => set(() => ({ caste: newCaste })),
	onReligionChange: (newReligion) => set(() => ({ religion: newReligion })),
	onLocationChange: (newLocation) => set(() => ({ location: newLocation })),
	onMinAgeChange: (newMinAge) => set(() => ({ minAge: newMinAge })),
	onMaxAgeChange: (newMaxAge) => set(() => ({ maxAge: newMaxAge })),
	onEducationChange: (newEducation) => set(() => ({ education: newEducation })),
	onOccupationChange: (newOccupation) =>
		set(() => ({ occupation: newOccupation })),
	onAnnualIncomeMinimumChange: (newIncome) =>
		set(() => ({ annualIncomeMinimum: newIncome })),
	onAnnualIncomeMaximumChange: (newIncome) =>
		set(() => ({ annualIncomeMaximum: newIncome })),
	onDisabilityChange: (newDisability) =>
		set(() => ({ disability: newDisability })),

	onDescriptionChange: (newDescription) =>
		set(() => ({ description: newDescription })),

	setFormId: (newFormId) => set(() => ({ formId: newFormId })),
}))

export default useFormStore
