import create from 'zustand'

const useLangStore = create((set) => ({
	language: "en",
    setLanguage: (newLanguage) => set(() => ({ language: newLanguage })),
}))

export default useLangStore
