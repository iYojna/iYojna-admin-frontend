import create from 'zustand'

const useFormStore = create((set) => ({
	language: "en",
    setLanguage: (newLanguage) => set(() => ({ language: newLanguage })),
}))

export default useFormStore
